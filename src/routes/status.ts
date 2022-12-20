import { Router } from "express";
import { ContainerTypes, container } from "../dependency-injection";
import { StatusController } from "../modules/status/status.controller";

export function register(router: Router) {
  const controller = container.get<StatusController>(
    ContainerTypes.StatusController
  );

  router.get("/status", (req, res) => controller.getHandler(req, res));
}
