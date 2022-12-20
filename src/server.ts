import cors from "cors";
import express, {
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
} from "express";
import Router from "express-promise-router";
import helmet from "helmet";
import http from "http";
import { ContainerTypes, container } from "./dependency-injection";
import { Logger } from "./modules/shared/interfaces/Logger";
import { registerRoutes } from "./routes";

export class Server {
  private express: express.Express;
  private logger: Logger;
  private port: string;
  httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;

    /* Get the logger from the container of dependency injection */
    this.logger = container.get<Logger>(ContainerTypes.Logger);

    /* Initializes the express application */
    this.express = express();

    /* Parses the request data */
    this.express.use(json());
    this.express.use(urlencoded({ extended: true }));

    /* Helmet is for app security with headers */
    this.express.use(helmet());

    /* Cors development configuration, not use in production */
    this.express.use(cors({ origin: "*" }));

    /* Setup the router */
    const router = Router();

    this.express.use(router);

    /* Function to register all routes */
    registerRoutes(router);

    /* Setup the error handler */
    router.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        this.logger.error(err);
        res.status(500).send({ error: "Internal Server Error" });
      }
    );
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        this.logger.info(
          `Application is running at http://localhost:${
            this.port
          } in ${this.express.get("env")} mode`
        );
        this.logger.info("Press CTRL-C to stop\n");
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.httpServer) return resolve();

      this.httpServer.close((err) => {
        return err ? reject(err) : resolve();
      });
    });
  }

  getHttpServer(): http.Server | undefined {
    return this.httpServer;
  }
}
