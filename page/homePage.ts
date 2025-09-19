import { expect, Locator, Page } from '@playwright/test'
export class Homepage {

  title: Locator;

  constructor(page: Page) {
    this.title = page.locator('div[class="slide-media"]  h1[class="hero-title "]')
  }
  async ourMessage(expectedTitle: string): Promise<void> {
    expect(this.title).toBe(expectedTitle)
  }
}