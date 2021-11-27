import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import path from 'path';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import registerRoutes from './routes';
import { initializedSequelize } from './infrastructure/infrastructure.sequelize';

class Server {
  app: express.Application;
  server: http.Server;

  // port is now available to the Node.js runtime
  // as if it were an environment variable
  port = process.env.PORT || 3000;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
  }

  setupExpress() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors({ origin: '*' }));
    this.app.use(compression());
  }

  setupHelmet() {
    this.app.use(helmet());
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

    if (!process.env.DEBUG) {
      loggerOptions.meta = false; // when not debugging, make terse
    }

    this.app.use(expressWinston.logger(loggerOptions));
  }

  setupRoutes() {
    registerRoutes(this.app);
  }

  setupFrontendServing() {
    const frontendPath = path.join(__dirname, 'public');
    // Configure Express to serve static files in the public folder
    this.app.use(express.static(frontendPath));

    // History mode routing fix
    this.app.all('*', (_req, res) => {
      try {
        res.sendFile(frontendPath + '/index.html');
      } catch (error) {
        res.json({ success: false, message: 'Something went wrong' });
      }
    });
  }

  setupDatabase() {
    initializedSequelize.sync().then(async () => {
      console.log('Database connection established');
    });
  }

  start() {
    this.setupExpress();
    this.setupWinstonLogger();
    this.setupRoutes();
    this.setupFrontendServing();
    this.setupHelmet();
    this.setupDatabase();

    this.server.listen(this.port, () => {
      console.log(`Server running at port ${this.port}`);
    });
  }
}

/* dbSeed().then(new Server().start, (error) =>
  console.log('An error occured while populating the database', error)
);*/

new Server().start();
