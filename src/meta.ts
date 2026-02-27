import { Request } from 'express';

export interface RequestMeta {
  method: string;
  url: string;
  headers: Record<string, string | string[] | undefined>;
  query: Record<string, unknown>;
  remoteAddress: string | undefined;
  protocol: string;
  hostname: string;
}

export function buildMeta(req: Request): RequestMeta {
  return {
    method: req.method,
    url: req.originalUrl,
    headers: req.headers as Record<string, string | string[] | undefined>,
    query: req.query as Record<string, unknown>,
    remoteAddress: req.socket.remoteAddress,
    protocol: req.protocol,
    hostname: req.hostname,
  };
}
