import { ExampleController } from '../controllers/example.controller';
import examplePostValidator from '../validators/example.validator';
import ValidatorErrorHandler from '../validators/error-handler.validator';
import * as core from 'express-serve-static-core';

const exampleRoute = (router: core.Router): core.Router => {
  router.post(`/`, examplePostValidator(), [
    ValidatorErrorHandler(),
    ExampleController.post,
  ]);
  router.get('/', ExampleController.get);
  return router;
};

export default exampleRoute;
