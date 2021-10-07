import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { handlers } from './default-handlers';

export const server = setupServer(...handlers);

type ServerMethod = 'get' | 'put' | 'post' | 'patch' | 'delete';

function serverUseJsonApi(method: ServerMethod, path: string, respJsonData: any): void {
  const fullUrl = getApiUrl(path);
  server.use(
    rest[method](fullUrl, (req, res, ctx) => {
      return res(ctx.json(respJsonData));
    }),
  );
}

export const mockServerApi = {
  get(path: string, respJsonData: any): void {
    serverUseJsonApi('get', path, respJsonData);
  },

  patch(path: string, respJsonData: any): void {
    serverUseJsonApi('patch', path, respJsonData);
  },
};

const BASE_URL = `/api`;

function getApiUrl(path: string): string {
  return `${BASE_URL}${path}`;
}
