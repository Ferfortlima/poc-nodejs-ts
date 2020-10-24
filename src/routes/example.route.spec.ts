import exampleRoute from './example.route';
import request from 'supertest';
import express from 'express';

import expressConfig from '../configs/express.config';
import * as core from 'express-serve-static-core';

const route: core.Router = exampleRoute(express.Router());
const server: core.Express = expressConfig(express());
server.use('/example', route);

describe('Example Routes', () => {
  describe('get', () => {
    it('Should return success object with queryParams', async () => {
      const result = await request(server)
        .get('/example')
        .query({ teste: 'Teste1' });
      expect(result.body).toEqual({
        mensagem: 'Teste da chamada GET com queryParams',
        status: 200,
      });
    });

    it('Should return success object without queryParams', async () => {
      const result = await request(server).get('/example');
      expect(result.body).toEqual({
        mensagem: 'Teste da chamada GET',
        status: 200,
      });
    });
  });

  describe('post', () => {
    it('Should return success object with body', async () => {
      const result = await request(server)
        .post('/example')
        .send({ teste: 'Teste1' });
      expect(result.body).toEqual({
        mensagem: 'Teste da chamada Post, passando body:{"teste":"Teste1"}',
        status: 200,
      });
    });

    it('Should return success object with error', async () => {
      const result = await request(server)
        .post('/example')
        .send({ test: 'Teste1' });
      expect(result.body).toEqual({
        errorCode: 400,
        fieldId: 'teste',
        message: 'Campo obrigatório não preenchido.',
      });
    });

    it('Should return success object without body with error', async () => {
      const result = await request(server).post('/example');
      expect(result.body).toEqual({
        errorCode: 400,
        fieldId: 'teste',
        message: 'Campo obrigatório não preenchido.',
      });
    });
  });
});
