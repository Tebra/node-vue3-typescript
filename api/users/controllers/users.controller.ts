import express, { Request } from "express";

class UsersController {
  async listAllUsers(req: express.Request, res: express.Response) {
    res.status(200).send([
      {
        user_id: 1,
        username: "Username 1",
      },
    ]);
  }
}

export default new UsersController();
