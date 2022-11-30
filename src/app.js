import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes/v1/index.js";
import swagger from "./docs/index.js";
import { logs, frontendUrl } from "./config/ENV.js";
import { converter, notFound, handler } from "./middlewares/error.js";

const app = express();

swagger("/v1/swagger", app);

// request logging. dev: console | production: file
app.use(morgan(logs));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing

/*
Example with whitelist:

const whitelist = [frontendUrl];
const corsOptions = {
  origin: (origin, callback) => {
    // console.log('ORIGEN',origin);
    //Revisar si la peticion viene de un servidor que esta en whitelist
    const existe = whitelist.some((dominio) => dominio === origin);
    if (existe || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido por CORS"));
    }
  },
};
app.use(cors(corsOptions));

*/

app.use(cors());

// parse body params and attache them to req.body
app.use(express.json());

// mount api v1 routes
app.use("/v1", routes);

// get status
app.use("/status", (req, res) => res.send("Server OK!"));

// if error is not an instanceOf APIError, convert it.
app.use(converter);

// catch 404 and forward to error handler
app.use(notFound);

// error handler, send stacktrace only during development
app.use(handler);

export default app;
