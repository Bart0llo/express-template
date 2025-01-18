import { RequestHandler } from "express";

class WelcomeController {
  public hello: RequestHandler = async (req, res) => {
    res.json({
      message: "Welcome to the API",
    });
  };
}

export const welcomeController = new WelcomeController();
