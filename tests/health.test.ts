import request from 'supertest';
import app from '../src/app';

describe('GET /api/v1/health', () => {
  it('responds with "Up and running"', async () => {
    const res = await request(app).get('/api/v1/health');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Up and running');
  });
});
