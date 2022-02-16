import router from '@/pages/index/router';

test('test store with mock', async () => {
  /**
   * @author
   * @mutations
   */
  expect(router.options.routes[0].name).toBe('Index');
});
