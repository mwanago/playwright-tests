import { expect, test } from '@playwright/test';

test.describe('The home page', () => {
  test.describe('when visited', () => {
    test('should contain the correct title', async ({ page, baseURL }) => {
      await page.goto('https://wanago.io');

      await expect(page).toHaveTitle(/Wanago/);
    });
  });
});
