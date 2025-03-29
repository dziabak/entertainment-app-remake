import { test, expect } from "@playwright/test";

test.describe("Home", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:5173/");
	});

	test("should display Media tile data", async ({ page }) => {
		await expect(page.getByTestId("media-grid")).toBeVisible();
		await expect(
			page.getByTestId("media-grid").getByTestId(/-media-tile$/)
		).toHaveCount(24);
	});

	test("should display Trending section", async ({ page }) => {
		await expect(page.getByText("Trending")).toBeVisible();
	});
});
