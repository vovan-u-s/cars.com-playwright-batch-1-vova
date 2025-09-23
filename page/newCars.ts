import { expect, Locator, Page } from '@playwright/test'

export class NewCars{
    
    mainMessage:Locator;
    constructor(page:Page){

        this.mainMessage=page.getByRole("heading", { name: 'Find your next  new car' })

    }
    async expectedTitle(titleMessage:string): Promise<void> {
        await expect(this.mainMessage).toHaveText(titleMessage)
    }
}