import { Router } from "express";
import fs from "fs";

export function registerRoutes(router: Router): void {
  const filePaths = fs.readdirSync(__dirname);
  const routes = filePaths.filter((path) => path !== "index.ts");

  for (const route of routes) {
    registerRoute(route, router);
  }
}

export function registerRoute(routePath: string, router: Router) {
  const file = require(`./${routePath}`);
  file.register(router);
}
