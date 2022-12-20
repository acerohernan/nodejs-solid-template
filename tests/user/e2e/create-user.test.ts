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

describe("POST /user", () => {
  it("should return a 201 when the request is valid", async () => {
    const response = await request(application.httpServer)
      .post("/user")
      .send({});

    expect(response.status).toEqual(201);
  });
});
