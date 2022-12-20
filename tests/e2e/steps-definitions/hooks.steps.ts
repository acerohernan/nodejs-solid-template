import { AfterAll, BeforeAll } from "@cucumber/cucumber";
import { App } from "../../../src/app";

let application: App;

BeforeAll(async () => {
  application = new App();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});

export { application };
