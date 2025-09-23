import { test } from '@playwright/test'
import { Homepage } from '../page/homePage'
import { SearchPage } from '../page/searchPage'
import { NewCars } from '../page/newCars'
test('homepage of cars.com', async ({ page }) => {
    let homepage = new Homepage(page)
    await page.goto('https://www.cars.com/')
    await homepage.ourMessage('Imagine the possibilities')
    await homepage.myMessage('- Or search by -')
    await homepage.searchWIthTheDetails('bmw', 'bmw-m5', '10', '60090')
    await page.waitForTimeout(5_000)
     let searchPage=new SearchPage(page)
    await searchPage.expectedTags(['BMW','M5'])
    await searchPage.expectedSearchBlock('bmw','10','60090')
    
   
})
test('NewCars test task', async ({ page }) => {
    let homepage = new Homepage(page)
 await homepage.clickNewCarsHeader()
    let myNewCars=new NewCars(page)
    await myNewCars.expectedTitle('Find your next  new car')
})