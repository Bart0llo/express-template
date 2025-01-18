import { Router } from "express";

const router: Router = Router();

/* Routes */
import welcomeRoute from "@/modules/welcome/welcome.route";

router.use("/", welcomeRoute)

/* Handle 404 */
router.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default router;
