import express, { Express } from "express";
import globalRoute from "@/route";
import { config } from "@/lib/config";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

class Application {
  private expressApp: Express;
  constructor() {
    this.expressApp = express();
  }

  private initMiddlewares() {
    /* Body Parser */
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: true }));

    /* CORS */
    this.expressApp.use(cors());

    /* Helmet */
    this.expressApp.use(helmet());

    /* Morgan */
    this.expressApp.use(morgan("dev"));
  }

  private initRoutes() {
    this.expressApp.use("/", globalRoute);
  }

  public start() {
    this.initMiddlewares();
    this.initRoutes();

    const port = config.get("PORT")

    this.expressApp.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }
}

export default Application;
