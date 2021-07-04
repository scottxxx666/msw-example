import {rest} from 'msw';

export const handlers = [
  rest.get('https://github.com/fake', (req, res, ctx) => {
    const query = req.url.searchParams.get('q');
    return res(
      ctx.delay(1500),
      ctx.status(200, 'Mocked status'),
      ctx.json({
        message: query ? 'Mocked query success' : 'Mocked success',
      }),
    );
  }),
];
