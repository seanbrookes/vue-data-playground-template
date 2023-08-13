// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:7777');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vue data playground template/);

  await expect(page.getByTestId('main-div')).toBeVisible();
  await page.pause();
});


