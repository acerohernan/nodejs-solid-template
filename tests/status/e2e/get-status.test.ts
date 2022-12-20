import request from "supertest";
import { App } from "../../../src/app";

let application: App;

beforeAll(async () => {
  application = new App();
  await application.start();
});

afterAll(async () => {
  await application.stop();
});

describe("GET /status", () => {
  it("should send a 200 response status code", async () => {
    const response = await request(application.httpServer).get("/status");

    expect(response.status).toEqual(200);
    expect(response.text).toEqual("OK");
  });
});
