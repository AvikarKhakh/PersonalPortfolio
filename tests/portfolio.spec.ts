import { expect, test } from "@playwright/test";

test("shows current work and provides reachable one-page sections", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  const guardianLogo = page.getByRole("img", {
    name: "Guardian Life Insurance logo",
  });
  await expect(guardianLogo).toBeVisible();
  await expect
    .poll(() =>
      guardianLogo.evaluate((image: HTMLImageElement) => image.naturalWidth),
    )
    .toBeGreaterThan(0);
  await expect(
    page.getByText(/associate software engineer/i).first(),
  ).toBeVisible();
  await expect(page.getByText(/technical co.?founder/i).first()).toBeVisible();
  await expect(page.getByText(/guardian/i).first()).toBeVisible();
  await expect(page.getByText(/steward/i).first()).toBeVisible();
  for (const section of ["work", "journey", "about", "contact"]) {
    await expect(page.locator(`#${section}`)).toBeAttached();
    await expect(page.locator(`a[href="#${section}"]`).first()).toBeAttached();
  }
  const menu = page.getByRole("button", { name: "Menu" });
  if (await menu.isVisible()) {
    await menu.click();
    await expect(page.getByRole("button", { name: "Close" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  }
  const contactLink = page
    .getByRole("navigation", { name: "Main navigation" })
    .locator('a[href="#contact"]');
  await contactLink.click();
  await expect(page).toHaveURL(/#contact$/);
  if (await menu.isVisible())
    await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator('a[href^="mailto:"]').first()).toBeVisible();
  expect(errors).toEqual([]);
});

test("fits the viewport and remains usable with reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator(".portfolio")).toHaveAttribute(
    "data-motion",
    "paused",
  );
  await expect(page.locator(".orbit-satellite").first()).toHaveCSS(
    "animation-name",
    "none",
  );
  await page.locator("#journey").scrollIntoViewIfNeeded();
  await expect(page.locator("#journey")).toBeVisible();
  const dimensions = await page.evaluate(() => ({
    page: document.documentElement.scrollWidth,
    viewport: window.innerWidth,
  }));
  expect(dimensions.page).toBeLessThanOrEqual(dimensions.viewport);
});

test("decorative animations run automatically without a playback control", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await expect(
    page.getByRole("button", { name: /Pause animations|Resume animations/ }),
  ).toHaveCount(0);
  await expect(page.locator(".portfolio")).toHaveAttribute(
    "data-motion",
    "running",
  );
  await expect(page.locator(".orbit-satellite").first()).toHaveCSS(
    "animation-play-state",
    "running",
  );
});

test("email copy reports success and gracefully handles clipboard denial", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (text: string) => {
          sessionStorage.setItem("copied-email", text);
        },
      },
    });
  });
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(page.getByText("Email copied.", { exact: true })).toBeVisible();
  expect(
    await page.evaluate(() => sessionStorage.getItem("copied-email")),
  ).toBe("avikarkhakh@gmail.com");
  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => {
          throw new Error("Clipboard denied");
        },
      },
    });
  });
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(
    page.getByText(
      "Couldn’t copy. Select the email address above or open your mail app.",
    ),
  ).toBeVisible();
  await expect(
    page.locator('a[href="mailto:avikarkhakh@gmail.com"]').first(),
  ).toBeVisible();
});

test("redirects old pages into the new portfolio", async ({ page }) => {
  await page.goto("/projects");
  await expect(page).toHaveURL(/\/#projects$/);
  await expect(page.locator("#projects")).toBeVisible();
  await page.goto("/about");
  await expect(page).toHaveURL(/\/#about$/);
});

test("serves canonical discovery metadata and security headers", async ({
  request,
}) => {
  const response = await request.get("/");
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).toContain("<loc>https://avikarkhakh.com</loc>");
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain(
    "Sitemap: https://avikarkhakh.com/sitemap.xml",
  );
  const legacyArticle = await request.get("/blog/old-article", {
    maxRedirects: 0,
  });
  expect(legacyArticle.status()).toBe(308);
  expect(legacyArticle.headers().location).toBe("/#work");
});
