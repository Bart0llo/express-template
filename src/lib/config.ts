import dotenv from "dotenv";
import { cleanEnv, port, testOnly } from "envalid";

class ConfigManager {
  private env: Record<string, any>;

  constructor() {
    dotenv.config();

    this.env = cleanEnv(process.env, {
      PORT: port({ devDefault: testOnly(3000) }),
    });

    console.log("Configuration loaded and validated.");
  }

  public get(key: keyof typeof this.env): string | number | undefined {
    return this.env[key];
  }
}

export const config = new ConfigManager();


