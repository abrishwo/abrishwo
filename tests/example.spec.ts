import { test, expect } from '@playwright/test';

test.describe('Portfolio Site E2E Tests', () => {

  test('should render the homepage correctly', async ({ page }) => {
    // Go to the homepage
    await page.goto('/');

    // Check for the main heading
    await expect(page.getByRole('heading', { name: /Abreham Wondimu/i })).toBeVisible();

    // Check for a few key sections to ensure they are rendered
    await expect(page.getByRole('heading', { name: /My Projects/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /From My Blog/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Get In Touch/i })).toBeVisible();
  });

  test('should navigate to a blog post and display its content', async ({ page }) => {
    // Go to the homepage
    await page.goto('/');

    // Find the first blog post link and click it
    const firstBlogPostLink = page.locator('section#blog a').first();
    await firstBlogPostLink.click();

    // The URL should now be a blog post page
    await expect(page).toHaveURL(/\/blog\/.+/);

    // Check for the blog post title and some content
    // This assumes the mock data is being used, which it will be as no CMS is configured
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('.prose')).toContainText('Next.js 14 has brought some incredible changes');
  });

  test('should allow a user to submit the contact form', async ({ page }) => {
    // Go to the homepage and navigate to the contact section
    await page.goto('/#contact');

    // Fill out the form
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Your Email').fill('test.user@example.com');
    await page.getByPlaceholder('Your Message').fill('This is an E2E test message.');

    // Submit the form
    await page.getByRole('button', { name: /Send Message/i }).click();

    // Check for the success message
    await expect(page.getByText('Thank you for your message!')).toBeVisible({ timeout: 10000 });
  });

});
