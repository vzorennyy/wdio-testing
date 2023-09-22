class ResourcesPage{
  get Title(){ return $('#hero-section-brand-heading')}
  get EmailInput(){ return $('//*[@id=":R8d7m:"]')}
  get CountrySelector(){ return $('//*[@id="country"]')}
  get InputCheckbox(){ return $('//*[@id="gated-agree-marketingEmailOptin1"]')}
  get SubcribeBtn(){ return $('//*[@id="form"]/form/div/button')}
  get ThanksMessage() {return $('//*[@id="hero-section-brand-heading"]')}


async isTitleDisplayed() {
  return await this.Title.isDisplayed()
}
  async clickOnEmailInput() {
  await this.EmailInput.click()
}
async EmailInputAddValue (value) {
  await this.EmailInput.addValue(value)
}
async clickOnCountrySelector() {
  await this.CountrySelector.click()
}

async clickOnCountry() {
await this.CountrySelector.selectByVisibleText('Ukraine');
}
async clickOnInputCheckbox() {
  await this.InputCheckbox.click()
}
async clickOnSubcribeBtn() {
  await this.SubcribeBtn.click()
}

async isThanksMessageDisplayed() {
  return await this.ThanksMessage.isDisplayed()
}
}
export default new ResourcesPage()