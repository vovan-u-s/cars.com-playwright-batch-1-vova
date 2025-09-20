import { expect, Locator, Page } from '@playwright/test'
export class Homepage {

  title: Locator;
  message: Locator;
  make: Locator;
  model: Locator;
  distace: Locator;
  zip: Locator;
  showButton: Locator;


  constructor(page: Page) {
    this.title = page.locator('h1[class="hero-title "]')
    this.message = page.locator('spark-stack[class="search-bar-horizontal-or"]')
    this.make = page.locator('select[name="makes[]"]')
    this.model = page.locator('select[name="models[]"]')
    this.distace = page.locator('select[name="maximum_distance"]')
    this.zip = page.locator('input[name = "zip"]')
    this.showButton = page.locator('spark-button[trid="ispsHAiuJe1hiWnAnf44kA"] ')
  }
  async ourMessage(expectedTitle: string): Promise<void> {
    await expect(this.title).toHaveText(expectedTitle)
  }
  async myMessage(expectedMessage: string): Promise<void> {
    await expect(this.message).toHaveText(expectedMessage)
  }
  async searchWIthTheDetails(make:string,model:string,distance:string,zip:string):Promise<void>{
    await this.make.selectOption(make)
    await this.model.selectOption(model)
    await this.distace.selectOption(distance)
    await this.zip.fill(zip)
    await this.showButton.click()
  }
}