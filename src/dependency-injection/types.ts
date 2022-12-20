export const ContainerTypes = {
  /**
   * Logger
   * @description app logger
   * @author acerohernan
   */
  Logger: Symbol.for("Logger"),

  /**
   * StatusControler
   * @description this is the controller for the status endpoints
   * @author acerohernan
   */
  StatusController: Symbol.for("StatusController"),

  /**
   * UserController
   * @description this is the controller for the user endpoints
   * @author acerohernan
   */
  UserController: Symbol.for("UserController"),
};
