import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Enviamos um link de auth para seu e-mail.");

  expect(toast).toBeVisible();

  await page.waitForTimeout(2000);
});

test("sign in with wrong credential", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel("Seu e-mail").fill("wrong@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Credenciais inválidas.");

  expect(toast).toBeVisible();

  await page.waitForTimeout(2000);
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Novo estelecimento" }).click();

  expect(page.url()).toContain("/sign-up");
});
