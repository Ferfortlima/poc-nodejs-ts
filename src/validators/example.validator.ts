import { body, ValidationChain } from 'express-validator';

const FIELD_REQUIRED = 'Campo obrigatório não preenchido.';

const validateBodyTeste: ValidationChain = body('teste')
  .exists()
  .withMessage(FIELD_REQUIRED)
  .notEmpty()
  .withMessage(FIELD_REQUIRED);

const examplePostValidator = (): ValidationChain[] => [validateBodyTeste];

export default examplePostValidator;
