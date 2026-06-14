import { test, expect } from "@playwright/test";

test("página do Playwright abre corretamente", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  await expect(page).toHaveTitle(/TodoMVC/);

  const input = page.getByPlaceholder("What needs to be done?");
  await expect(input).toBeVisible();
});

test("consigo adicionar uma tarefa", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  await page
    .getByPlaceholder("What needs to be done?")
    .fill("Aprender Playwright");

  await page.keyboard.press("Enter");

  //CORRECAO: O teste estava falhando porque o texto "Aprender Playwright" não estava sendo encontrado. O correto é verificar se a tarefa foi adicionada corretamente, ou seja, se o texto "Aprender Playwright" está visível na página.
  await expect(page.getByText("Aprender Playwright")).toBeVisible();
});