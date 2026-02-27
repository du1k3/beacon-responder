import request from 'supertest';
import app from '../src/app';

describe('GET /api/v1/commands', () => {
  it('responds with a commands array and _meta', async () => {
    const res = await request(app).get('/api/v1/commands');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.commands)).toBe(true);
    expect(res.body.commands.length).toBeGreaterThan(0);
    expect(res.body).toHaveProperty('_meta');
  });

  it('each command has id, name, and description fields', async () => {
    const res = await request(app).get('/api/v1/commands');
    for (const cmd of res.body.commands) {
      expect(cmd).toHaveProperty('id');
      expect(cmd).toHaveProperty('name');
      expect(cmd).toHaveProperty('description');
    }
  });

  it('_meta contains expected request and network fields', async () => {
    const res = await request(app).get('/api/v1/commands');
    const meta = res.body._meta;
    expect(meta).toHaveProperty('method', 'GET');
    expect(meta).toHaveProperty('url');
    expect(meta).toHaveProperty('headers');
    expect(meta).toHaveProperty('query');
    expect(meta).toHaveProperty('remoteAddress');
    expect(meta).toHaveProperty('protocol');
    expect(meta).toHaveProperty('hostname');
  });
});
