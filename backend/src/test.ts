import VaucherApi, { defineOptions } from ".";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const CONFIGS = defineOptions({
  server: {
    port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000,
    secret: "secret",
  },
  db: {
    uri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/vaucherapi",
  },
  bootstrapScripts: [],
  routes,
});

(async () => {
  const vaucher = new VaucherApi(CONFIGS);
  await vaucher.init();
})();
