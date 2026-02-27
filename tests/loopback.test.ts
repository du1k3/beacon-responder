import request from 'supertest';
import app from '../src/app';

const payload = { message: 'hello', count: 42 };

describe('POST /api/v1/loopback', () => {
  it('echoes back the request body with _meta appended', async () => {
    const res = await request(app).post('/api/v1/loopback').send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(payload);
    expect(res.body).toHaveProperty('_meta');
  });

  it('_meta contains expected request and network fields', async () => {
    const res = await request(app).post('/api/v1/loopback').send(payload);
    const meta = res.body._meta;
    expect(meta).toHaveProperty('method', 'POST');
    expect(meta).toHaveProperty('url');
    expect(meta).toHaveProperty('headers');
    expect(meta).toHaveProperty('query');
    expect(meta).toHaveProperty('remoteAddress');
    expect(meta).toHaveProperty('protocol');
    expect(meta).toHaveProperty('hostname');
  });
});

describe('PUT /api/v1/loopback', () => {
  it('echoes back the request body with _meta appended', async () => {
    const res = await request(app).put('/api/v1/loopback').send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(payload);
    expect(res.body).toHaveProperty('_meta');
  });

  it('_meta method reflects the HTTP verb used', async () => {
    const res = await request(app).put('/api/v1/loopback').send(payload);
    expect(res.body._meta).toHaveProperty('method', 'PUT');
  });
});
