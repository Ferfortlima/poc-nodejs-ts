import { validationResult } from 'express-validator';
import * as core from 'express-serve-static-core';

interface ErrorFormatterParams {
  msg: string;
  param: string;
}

interface FormattedError {
  fieldId: string;
  message: string;
  errorCode: number;
}

const errorFormatter = (params: ErrorFormatterParams) =>
  ({
    fieldId: params.param,
    message: params.msg,
    errorCode: 400,
  } as FormattedError);

const ValidatorErrorHandler = () => async (
  request: core.Request,
  response: core.Response,
  next: core.NextFunction
): Promise<void> => {
  const errors = validationResult(request).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    const FirstError = errors.array({ onlyFirstError: true })[0];
    response.status(FirstError.errorCode).json(FirstError);
  } else {
    next();
  }
};
export default ValidatorErrorHandler;
