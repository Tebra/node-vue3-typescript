import { CommonRoutesConfig } from "../../common/common.routes.config";
import UsersController from "../controllers/users.controller";
import express from "express";

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UserRoutes");
  }

  configureRoutes() {
    this.app.route("/users").get(UsersController.listAllUsers);

    return this.app;
  }
}
