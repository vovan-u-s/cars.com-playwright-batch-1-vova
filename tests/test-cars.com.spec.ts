import { test } from '@playwright/test'
import { Homepage } from '../page/homePage'
test('homepage of cars.com', async ({ page }) => {

    let homepage = new Homepage(page)
    await page.goto('https://www.cars.com/')
    await homepage.ourMessage('Imagine the possibilities')
    await homepage.myMessage('- Or search by -')
    await homepage.searchWIthTheDetails('bmw', 'bmw-m5', '10', '60090')
    await page.waitForTimeout(5_000)


})
