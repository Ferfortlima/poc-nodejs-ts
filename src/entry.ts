import expressConfig from './configs/express.config';
import exampleRoute from './routes/example.route';
import dotenv from 'dotenv';
import express from 'express';
import * as core from 'express-serve-static-core';

dotenv.config();
const route: core.Router = exampleRoute(express.Router());
const server: core.Express = expressConfig(express());

server.use('/example', route);

server.listen(process.env.PORT || 3000, () =>
  console.log(
    `${process.env.APP_NAME} service running in port - ${
      process.env.PORT || 3002
    }`
  )
);
