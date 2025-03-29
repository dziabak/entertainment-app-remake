import { test, expect } from "@playwright/test";

test.describe("Bookmarking", () => {
	test("should bookmark and unbookmark media item from the Home page", async ({
		page,
	}) => {
		await page.goto("http://localhost:5173/");

		// create bookmark button locator
		const bookmarkBtn = page
			.getByTestId("the-great-lands-media-tile")
			.getByTestId("bookmark-btn");

		// click to bookmark
		await bookmarkBtn.click();
		await expect(bookmarkBtn.locator("svg")).toHaveAttribute(
			"data-state",
			"bookmarked"
		);

		// click to unbookmark
		await bookmarkBtn.click();
		await expect(bookmarkBtn.locator("svg")).toHaveAttribute(
			"data-state",
			"unbookmarked"
		);
	});

	test("should bookmark and unbookmark media item from the Media Item page", async ({
		page,
	}) => {
		await page.goto("http://localhost:5173/home/the-great-lands");

		// create bookmark button locator
		const bookmarkBtn = page
			.getByTestId("media-item-page-backdrop")
			.getByTestId("bookmark-btn");

		// click to bookmark
		await bookmarkBtn.click();
		await expect(bookmarkBtn.locator("svg")).toHaveAttribute(
			"data-state",
			"bookmarked"
		);

		// click to unbookmark
		await bookmarkBtn.click();
		await expect(bookmarkBtn.locator("svg")).toHaveAttribute(
			"data-state",
			"unbookmarked"
		);
	});
});
