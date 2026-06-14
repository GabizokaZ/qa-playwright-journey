import { test, expect } from "@playwright/test";

test("locators modernos em ação", async ({ page }) => {
  // Abre o TodoMVC
  await page.goto("https://demo.playwright.dev/todomvc");

  // Localiza o campo de texto e cria uma tarefa
  const input = page.getByPlaceholder("What needs to be done?");
  await input.fill("Estudar Playwright");
  await input.press("Enter");

  // Verifica que a tarefa foi criada
  const item = page.getByText("Estudar Playwright");
  await expect(item).toBeVisible();

  // Localiza especificamente o checkbox da tarefa criada
  const checkbox = page.getByRole("checkbox", {
    name: "Toggle Todo",
  });

  await checkbox.check();

  // Localiza o <li> que contém a tarefa
  const tarefa = page.locator("li").filter({
    hasText: "Estudar Playwright",
  });

  // Verifica se a tarefa foi marcada como concluída
  await expect(tarefa).toHaveClass(/completed/);
});