import { expect, Locator, Page } from '@playwright/test'
export class Homepage {

  title: Locator;

  constructor(page: Page) {
    this.title = page.locator('h1[class="hero-title "]')
  }
  async ourMessage(expectedTitle: string): Promise<void> {
    expect(this.title).toHaveText(expectedTitle)
  }
}