import { ExampleController } from './example.controller';
import * as core from 'express-serve-static-core';
import { ExampleResponse } from '../models/responses/example.response';

describe('Example Controller', () => {
  const mockReq = (query: object = {}, body?: object): core.Request =>
    ({
      query: query,
      body: body,
    } as core.Request);

  const mockRes = (): core.Response =>
    ({
      send: (obj: object) => obj,
    } as core.Response);

  beforeEach(() => {
    jest.resetModules();
  });

  describe('get', () => {
    it('Should return success without queryParams', async () => {
      const result: core.Response<ExampleResponse> = ExampleController.get(
        mockReq(),
        mockRes()
      );
      expect(result).toBeTruthy();
      expect(result).toEqual({
        mensagem: 'Teste da chamada GET',
        status: 200,
      });
    });

    it('Should return success with queryParams', async () => {
      const result: core.Response<ExampleResponse> = ExampleController.get(
        mockReq({ teste: true }),
        mockRes()
      );
      expect(result).toBeTruthy();
      expect(result).toEqual({
        mensagem: 'Teste da chamada GET com queryParams',
        status: 200,
      });
    });
  });

  describe('post', () => {
    it('Should return success message with body', async () => {
      const result: core.Response<ExampleResponse> = ExampleController.post(
        mockReq(undefined, { teste: true }),
        mockRes()
      );
      expect(result).toBeTruthy();
      expect(result).toEqual({
        mensagem: 'Teste da chamada Post, passando body:{\"teste\":true}',
        status: 200,
      });
    });
  });
});
