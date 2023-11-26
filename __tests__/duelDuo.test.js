const { Builder, Browser, By, until } = require("selenium-webdriver");
let driver;
require('chromedriver');
beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("Draw button displays the div with id = choices", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id('draw')).click();
    await driver.findElement(By.id('choices')).isDisplayed();
    await driver.sleep(1000);
  })
  test( 'Add to Duo button displays the div with id = player-duo', async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id('draw')).click();
    await driver.findElement(By.className('bot-btn')).click()
    await driver.findElement(By.id('player-duo')).isDisplayed();
    await driver.sleep(1000);
  })
  
});
