const supertest = require('supertest');
const { app: expressInstance } = require('../app');

const contactsList = [
  {
    firstName: 'a1',
    lastName: 'b1',
    dateOfBirth: new Date(),
    email: 'a@a.a',
    sms: true
  },
  {
    firstName: 'a2',
    lastName: 'b2',
    dateOfBirth: new Date(),
    email: 'a2@a.a'
  }
];

describe('api endpoints', () => {
  const app = supertest(expressInstance);

  afterAll(() => {
    app.end();
  });

  describe('should fail', () => {
    it('should return 400 (BAD_REQUEST) some endpoint missing data', async () => {
      const { status } = await app
        .post('/send')
        .send()
      expect(status).toBe(400);
    });
  });
  describe('should not fail', () => {
    it('should return 200 (OK) some endpoint missing data', async () => {
      const { status, body } = await app
        .post('/send')
        .send(contactsList)
      expect(status).toBe(200);
      expect(body).toEqual({ smsSends: 1, emailSends: 2 });
    });
  });
});
