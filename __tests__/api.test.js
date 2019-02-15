const request = require('supertest');
const app = require('../server/app');

const examplePOSTbody = {
  form: {
    greeting: 'Hi',
    id: 5,
    injections: { title: 'Message from the sublime' },
    message:
      'Thank you so much for that thing you did for me. I really appreciate your help. Thanks again!',
    name: 'Galvanize Letterhead',
    salutation: 'Warm regards,',
    subjectLine: 'Welcome toHR114!',
    templateName: 'doesnotexist',
    type: 'techmentor',
  },
  currentUser: { name: 'John Smith', email: 'example@gmail.com' },
  recipients: [
    {
      firstName: 'Example',
      lastName: 'Student1',
      preferred: 'Example',
      email: 'nvincenthill@gmail.com',
    },
  ],
};

describe('GET', () => {
  it('Should 404 a bad GET request', () => request(app)
    .get('/api/&(@$Y@(^@)#(3/8989-09')
    .then((response) => {
      expect(response.statusCode).toBe(404);
    }));
});

describe('POST', () => {
  it('should respond with status code 200 to a valid POST request', () => request(app)
    .post('/api/send')
    .send(JSON.stringify(examplePOSTbody))
    .expect(200));

  it('should respond with a well formed error object to an invalid POST body', (done) => {
    request(app)
      .post('/api/send')
      .send(JSON.stringify(examplePOSTbody))
      .expect(200, { message: 'ERROR: Invalid sender or recipient(s)!', err: true }, done);
  });
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
  it('should respond with status code 200 to a valid options request', () => request(app)
    .options('/api')
    .expect(200));
});
