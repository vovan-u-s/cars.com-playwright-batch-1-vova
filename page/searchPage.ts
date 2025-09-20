import { expect, Locator, Page } from '@playwright/test'
export class SearchPage {
    currentTags: Locator;

    constructor(page: Page) {
        this.currentTags = page.locator('div[id="active_filter_tags"] label')
    }
    async expectedTags(ourTags: string[]): Promise<void> {
        for (let i = 0; i < ourTags.length; i++) {
            let actualCurrentTags = this.currentTags.getByText(ourTags[i])
            await expect(actualCurrentTags).toHaveText(ourTags[i])
            await expect(actualCurrentTags).toBeVisible()
        }


    }
}