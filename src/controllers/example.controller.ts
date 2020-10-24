import * as core from 'express-serve-static-core';
import { ExampleResponse } from '../models/responses/example.response';
export class ExampleController {
  public static get(
    req: core.Request,
    res: core.Response
  ): core.Response<ExampleResponse> {
    if (Object.keys(req.query).length > 0) {
      return res.send({
        mensagem: 'Teste da chamada GET com queryParams',
        status: 200,
      });
    } else {
      return res.send({
        mensagem: 'Teste da chamada GET',
        status: 200,
      });
    }
  }

  public static post(
    req: core.Request,
    res: core.Response
  ): core.Response<ExampleResponse> {
    return res.send({
      mensagem: `Teste da chamada Post, passando body:${JSON.stringify(
        req.body
      )}`,
      status: 200,
    });
  }
}
