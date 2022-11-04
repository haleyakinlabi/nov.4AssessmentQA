
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

// async

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("draw button displays id=choices", async () =>{
    const drawButton = await driver.findElement(By.id("draw"))
    await drawButton.click()
    await driver.sleep(3000)

    const choicesId = await driver.findElement(By.id("choices"))
    const results = await choicesId.isDisplayed()

    expect(results).toBe(true)
    await driver.sleep(3000)

})

test('clicking Add to Duo displays id =player-duo', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(1500)
    await driver.findElement(By.css('.bot-btn')).click();
    await driver.sleep(1500)
   const duoDiv= await driver.findElement(By.id('player-duo'));

   expect(duoDiv.isDisplayed()).toBeTruthy();
})

