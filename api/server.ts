//import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as http from "http";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";
import { CommonRoutesConfig } from "./common/common.routes.config";
import { UsersRoutes } from "./users/routes/users.routes.config";

class Server {
  app: express.Application;
  server: http.Server;
  routes: Array<CommonRoutesConfig> = [];

  // port is now available to the Node.js runtime
  // as if it were an environment variable
  port = process.env.PORT || 3000; //process.env.SERVER_PORT;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
  }

  setupDotEnv() {
    // TODO: Setup dotenv environment configs
    // initialize configuration
    //dotenv.config();
  }

  setupExpress() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  setupWinstonLogger() {
    const loggerOptions: expressWinston.LoggerOptions = {
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
      ),
    };

    /*if (!process.env.DEBUG) {
            loggerOptions.meta = false; // when not debugging, make terse
        }*/

    this.app.use(expressWinston.logger(loggerOptions));
  }

  setupRoutes() {
    this.routes.push(new UsersRoutes(this.app));
  }

  setupFrontendServing() {
    const frontendPath = path.join(__dirname, "public");
    // Configure Express to serve static files in the public folder
    this.app.use(express.static(frontendPath));

    // History mode routing fix
    this.app.all("*", (_req, res) => {
      try {
        res.sendFile(frontendPath + "/index.html");
      } catch (error) {
        res.json({ success: false, message: "Something went wrong" });
      }
    });
  }

  start() {
    this.setupExpress();
    this.setupWinstonLogger();
    this.setupRoutes();
    this.setupFrontendServing();

    this.server.listen(this.port, () => {
      this.routes.forEach((route: CommonRoutesConfig) => {
        console.log("Routes setup", route.name);
      });
      console.log(`Server running at http://localhost:${this.port}`);
    });
  }
}

new Server().start();
