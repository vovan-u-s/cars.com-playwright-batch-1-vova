import { expect, Locator, Page } from '@playwright/test'
export class SearchPage {
    currentTags: Locator;
    make: Locator;
    searchWithin: Locator;
    zip: Locator;
    constructor(page: Page) {
        this.currentTags = page.locator('div[id="active_filter_tags"] label')
        this.make = page.getByRole('region', { name: 'Basics' }).getByLabel('Make')
        this.searchWithin = page.getByLabel('Search within')
        this.zip = page.getByRole('textbox', { name: 'ZIP' })
    }
    async expectedTags(ourTags: string[]): Promise<void> {
        for (let i = 0; i < ourTags.length; i++) {
            let actualCurrentTags = this.currentTags.getByText(ourTags[i])
            await expect(actualCurrentTags).toHaveText(ourTags[i])
            await expect(actualCurrentTags).toBeVisible()
        }
    }
    async expectedSearchBlock(make: string, searchWithin: string, zip: string): Promise<void> {       
        await expect(this.make).toHaveValue(make)
        await expect(this.searchWithin).toHaveValue(searchWithin)
        await expect(this.zip).toHaveValue(zip)
       
    }




}