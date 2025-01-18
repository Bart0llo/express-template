import { Router } from "express";
import { welcomeController } from "./welcome.controller";

const router: Router = Router();

router.get("/", welcomeController.hello);

export default router;