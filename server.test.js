const request = require('supertest');
const app = require('./server'); // Import the exported app

describe('GET /', () => {
  it('should return Hello World! with status 200', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/) // Optional: Check content type
      .expect(200, 'Hello World!', done); // Assert status code and body
  });
});
