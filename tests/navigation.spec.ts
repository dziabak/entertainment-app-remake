import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:5173/");
	});

	test("should display Home page as the root page", async ({ page }) => {
		await expect(page).toHaveTitle("Home | Entertainment App");
	});

	test("should display Home page after clicking application logo navigation link", async ({
		page,
	}) => {
		await page.getByTestId("navigation-logo-btn").click();
		await expect(page).toHaveTitle("Home | Entertainment App");
	});

	test("should display Home page after clicking Home navigation link", async ({
		page,
	}) => {
		await page.getByTestId("navigation-home-btn").click();
		await expect(page).toHaveTitle("Home | Entertainment App");
	});

	test("should display Movies page after clicking Movies navigation link", async ({
		page,
	}) => {
		await page.getByTestId("navigation-movies-btn").click();
		await expect(page).toHaveTitle("Movies | Entertainment App");
	});

	test("should display TV Series page after clicking TV Series navigation link", async ({
		page,
	}) => {
		await page.getByTestId("navigation-series-btn").click();
		await expect(page).toHaveTitle("TV Series | Entertainment App");
	});

	test("should display Bookmarked page after clicking Bookmarked navigation link", async ({
		page,
	}) => {
		await page.getByTestId("navigation-bookmarked-btn").click();
		await expect(page).toHaveTitle("Bookmarked | Entertainment App");
	});

	test("should display Media Item page", async ({ page }) => {
		await page.getByRole("link", { name: "The Great Lands" }).click();
		await expect(page).toHaveTitle("The Great Lands | Entertainment App");
		await expect(page).toHaveURL("http://localhost:5173/home/the-great-lands");
	});

	test("should close Media Item page and return to the previous page", async ({
		page,
	}) => {
		await page.goto("http://localhost:5173/home/the-great-lands");

		const modalBoundingBox = await page
			.getByTestId("media-item-page-backdrop")
			.boundingBox();
		const xOutside = modalBoundingBox!.x - 10;
		const yOutside = modalBoundingBox!.y + 10;

		await page.mouse.move(xOutside, yOutside);
		await page.mouse.down();
		await page.mouse.up();

		await expect(page).toHaveURL("http://localhost:5173/home");
	});
});
