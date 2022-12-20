import { Router } from "express";
import { ContainerTypes, container } from "../dependency-injection";
import { UserController } from "../modules/user/user.controller";

export function register(router: Router) {
  const controller = container.get<UserController>(
    ContainerTypes.UserController
  );

  router.post("/user", (req, res) => controller.createUserHandler(req, res));
}
