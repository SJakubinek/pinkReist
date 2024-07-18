import { expect, test } from '@playwright/test';

// Expect a title, which contains the substring "Mitlandratten".
test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Mitlandratten/);
});

// Go to impressum and expect title containing the substring "Impressum"
test('impressum title', async ({ page }) => {
  await page.goto('/');

  // Click impressum link
  await page.getByRole('link', { name: 'Impressum' }).click();

  await expect(page.getByTestId('title')).toBeVisible();
});
