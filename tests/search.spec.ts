import { test, expect } from "@playwright/test";

test.describe("Search", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:5173/");
	});

	test("should return searched item if it matches the query", async ({
		page,
	}) => {
		await page.getByTestId("searchbar").fill("The Great Lands");
		await expect(page.getByTestId("the-great-lands-media-tile")).toHaveCount(1);
	});

	test("should return error information if there are no search results", async ({
		page,
	}) => {
		await page.getByTestId("searchbar").fill("aaa");
		await expect(page.getByTestId("media-grid")).not.toBeVisible();
		await expect(page.getByTestId(/-media-tile$/)).toHaveCount(0);
	});
});
