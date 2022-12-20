import { Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export class UserController {
  async createUserHandler(req: Request, res: Response): Promise<void> {
    res.status(201).send();
  }
}
