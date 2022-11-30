import "./config/ENV.js";
import { port, env } from "./config/ENV.js";
import logger from "./config/logger.js";
import app from "./app.js";

app.listen(port, () => logger.info(`Server started on port ${port} (${env})`));

export default app;
