import * as core from 'express-serve-static-core';

export class ExampleController {
  public static get(req: core.Request, res: core.Response): void {
    if (req.query) {
      res.send('Teste da chamada GET com queryParams');
    } else {
      res.send('Teste da chamada GET');
    }
  }

  public static post(req: core.Request, res: core.Response): void {
    res.send(
      `Teste da chamada Post, passando body:${JSON.stringify(req.body)}`
    );
  }
}
