import assert from "assert";
import {expect} from '@wdio/globals'

import LoginPage from "./../pages/login.page.js";
import MainPage from "../pages/main.page.js";
import mainPage from "../pages/main.page.js";
import ResourcesPage from "../pages/resources.page.js";
import PricingPage from "../pages/pricing.page.js";
describe("My GitHub testing", () => {
  
  before(async () => {
    await browser.url('https://github.com/');
  });
  
  it("Test case 1", async () => {
    await browser.maximizeWindow();
    await browser.pause(1000);
    await LoginPage.clickOnSignUpBtn()
    await browser.pause(5000);
    await LoginPage.isTextDisplayed()
    console.log("Text is displayed in vivewport: "  + LoginPage.isTextDisplayed)
    await LoginPage.EmailInputAddValue("tester.mail@gmail.com");
    await browser.pause(1000);
    await LoginPage.clickOnContinueBtn()
    await browser.pause(2000);
    await LoginPage.PasswordInputAddValue("123superd12345")
    await browser.pause(2000);
    await LoginPage.clickOnContinueBtn2()
    await browser.pause(2000);
    await LoginPage.UserNameInputAddValue("Testonators")
    await browser.pause(1000);
    await LoginPage.clickOnContinueBtn3()
    await browser.pause(1000);
    await LoginPage.ConfirmInputAddValue("y")
    await browser.pause(1000);
    await LoginPage.clickOnContinueBtn4()
    await browser.pause(1000);
  });
  it("Test case 2", async () => {
    await browser.url('https://github.com/');
    await MainPage.scrollToTitle()
    await browser.waitUntil(async () => await MainPage.Title.isDisplayed(),
      {timeout: 5000,timeoutMsg: 'Element is not displayed within 5s'})
    await browser.pause(2000);
    await MainPage.isTitleDisplayed()
      console.log("Is title displayed in vivewport: "  + MainPage.isTitleDisplayed)
    await MainPage.clickOnStartBtn()
    await browser.pause(2000);
    await MainPage.clickOnEnterpriseCloudButton()
    await browser.pause(2000);
  });

  it("Test case 3", async () => {
    await browser.url('https://github.com/');
    await browser.maximizeWindow();
    await browser.pause(1000);
    await MainPage.scrollToSubscribeLink()
    await browser.waitUntil(async () => await MainPage.SubscribeLink.isDisplayed(),
      {timeout: 5000,timeoutMsg: 'Element is not displayed within 5s'})
    await mainPage.SubscribeLinkIsClickable()
      console.log("Subscribe link is сlickable"  + MainPage.SubscribeLinkIsClickable)
    await mainPage.clickOnSubscribeLink()
    await browser.pause(2000);
       
    const expectedUrl = 'https://resources.github.com/newsletter/'; 
    const currentUrl = await browser.getUrl(); 
    expect(currentUrl).toBe(expectedUrl);
    await ResourcesPage.isTitleDisplayed()
    await ResourcesPage.clickOnEmailInput()
    await ResourcesPage.EmailInputAddValue("tester.mail@gmail.com");
    await browser.pause(2000);
    await ResourcesPage.clickOnCountrySelector()
    await browser.pause(2000);
    await ResourcesPage.clickOnCountry()
    await browser.pause(2000);
    await ResourcesPage.clickOnInputCheckbox()
    await browser.pause(2000);
    await ResourcesPage.clickOnSubcribeBtn()
    await ResourcesPage.isThanksMessageDisplayed()
    
});
it("Test case 4", async () => {
  await browser.url('https://github.com/');
  await browser.maximizeWindow();
  await browser.pause(1000);
  await MainPage.clickOnSearchItem()
  await browser.pause(1000);
  await MainPage.addValueInSearchInput("act"); 
  await browser.pause(1000);
  await browser.keys('\uE007')
  await browser.pause(5000);
  const keyword = "act";
  await MainPage.SearchResultText()
  assert(MainPage.SearchResult.includes(keyword), 'Page don`t include the keyword')


});

it("Test case 5", async () => {
  await browser.url('https://github.com/');
  await browser.maximizeWindow();
  await browser.pause(1000);
  await MainPage.clickOnPricingLink()
  await browser.pause(1000);
  await PricingPage.Title.isDisplayedInViewport()
  await PricingPage.scrollToCompareLink()
  await browser.waitUntil(async () => await PricingPage.CompareLink.isDisplayed(),
      {timeout: 5000,timeoutMsg: 'Element is not displayed within 5s'})
  await browser.pause(3000);
  await PricingPage.clickOnCompareLink()
  await browser.pause(1000);
  expect(PricingPage.CompareTitle).toHaveValue("Compare features");
});
 
});