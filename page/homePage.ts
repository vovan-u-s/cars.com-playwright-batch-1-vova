import { expect, Locator, Page } from '@playwright/test'
export class Homepage {

  title: Locator;
  message:Locator;

  constructor(page: Page) {
    this.title = page.locator('h1[class="hero-title "]')
    this.message=page.locator('spark-stack[class="search-bar-horizontal-or"]')
  }
  async ourMessage(expectedTitle: string): Promise<void> {
    await expect(this.title).toHaveText(expectedTitle)
  }
  async myMessage(expectedMessage:string):Promise<void>{
    await expect(this.message).toHaveText(expectedMessage)
  }
}