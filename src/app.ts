import "reflect-metadata";
import { Server } from "./server";

export class App {
  server?: Server;

  async start(): Promise<void> {
    const port = process.env.PORT || "3000";
    this.server = new Server(port);

    return this.server.listen();
  }

  async stop() {
    return this.server?.stop();
  }

  get httpServer() {
    return this.server?.getHttpServer();
  }
}
