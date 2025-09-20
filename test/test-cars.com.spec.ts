import { test} from '@playwright/test'
import { Homepage } from '../page/homePage'
test('homepage of cars.com', async ({ page }) => {

    let homepage = new Homepage(page)
    await page.goto('https://www.cars.com/')
    await homepage.ourMessage('Imagine the possibilities')
    await homepage.myMessage('- Or search by -')
})