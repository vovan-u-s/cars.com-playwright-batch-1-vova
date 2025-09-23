import { expect, Locator, Page } from '@playwright/test'

export class NewCars{
    
    mainMessage:Locator;
    constructor(page:Page){
        
        this.mainMessage=page.locator("getByRole('heading', { name: 'Find your next  new car' })")
        
    }
    async expectedTitle(titleMessage:string): Promise<void> {
        await expect(this.newCars).toHaveText(titleMessage)
    }
}