import { Container } from "inversify";
import { WinstonLogger } from "../modules/shared/adapters/WinstonLogger";
import { Logger } from "../modules/shared/interfaces/Logger";
import { StatusController } from "../modules/status/status.controller";
import { ContainerTypes } from "./types";

export const container = new Container();

/**
 * Logger
 * @description app logger
 * @author acerohernan
 */
container.bind<Logger>(ContainerTypes.Logger).to(WinstonLogger);

/**
 * StatusControler
 * @description this is the controller for the status endpoints
 * @author acerohernan
 */
container
  .bind<StatusController>(ContainerTypes.StatusController)
  .to(StatusController);
