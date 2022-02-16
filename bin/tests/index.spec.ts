import { render, DIRECTIVES as directives } from '@/../tests/utils';
import App from '@/../bin/index/Index.vue';
import { KEY, STORE as store } from '@/../bin/index/store';

describe('test template', () => {
  test('template index.vue', async () => {
    await render(App, {
      global: {
        plugins: [[store, KEY]],
        directives,
      },
    });
  });
});
