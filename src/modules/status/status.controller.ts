import { Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export class StatusController {
  async getStatusHandler(req: Request, res: Response): Promise<void> {
    res.status(200).send("OK");
  }
}
