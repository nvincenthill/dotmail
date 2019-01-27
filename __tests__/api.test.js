const request = require('supertest');
const app = require('../server/app');

describe('GET', () => {
  it('Should get a response given a good GET request', () => request(app)
    .get('/api/')
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));

  it('Should 404 a bad GET request', () => request(app)
    .get('/api/&(@$Y@(^@)#(3/8989-09')
    .then((response) => {
      expect(response.statusCode).toBe(404);
    }));
});

describe('POST', () => {
  // it('should respond with status code 201', () => request(app)
  //   .post('/api')
  //   .send({})
  //   .expect(201));
});

describe('PUT', () => {
  // it('should respond with status code 200', () => request(app)
  //   .put('/api')
  //   .expect(200));

  it('should respond with a 404 for invalid put', () => request(app)
    .put('/api')
    .expect(404));
});

describe('DELETE', () => {
  // it('should respond with status code 200', () => request(app)
  //   .delete('/api')
  //   .expect(200));

  it('should respond with a 404 for invalid delete', () => request(app)
    .delete('/api')
    .expect(404));
});

describe('OPTIONS', () => {
  it('should respond with status code 200', () => request(app)
    .options('/api')
    .expect(200));
});
