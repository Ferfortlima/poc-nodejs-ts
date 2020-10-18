import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import * as core from 'express-serve-static-core';

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};

const expressConfig = (express: core.Express): core.Express => {
  express.set('port', process.env.PORT);
  express.set('json spaces', 4);
  express.use(helmet());
  express.use(cors(options));
  express.use(bodyParser.urlencoded({ extended: true }));
  express.use(bodyParser.json({ limit: process.env.JSON_SIZE }));
  express.use(methodOverride());
  return express;
};
export default expressConfig;
