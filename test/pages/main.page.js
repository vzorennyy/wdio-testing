class MainPage{
  get Title(){ return $('h2.color-fg-default.mb-3.h3-mktg.col-lg-8.mx-md-auto.px-3')}
  get StartBtn(){ return $('a.btn-mktg.btn-large-mktg.btn-muted-mktg')}  
  get EnterpriseCloudButton(){ return $('/html/body/div[1]/div[4]/main/div/div[2]/div/div/div[1]/a')}
  get SubscribeLink() { return  $('[class="btn-mktg mb-4 btn-muted-mktg"]') }
  get SearchItem() { return $('//html/body/div[1]/div[1]/header/div/div[2]/div/div/qbsearch-input/div[1]/button/span')}
  get SearchInput() { return $('#query-builder-test')}
  get SearchResult(){ return $('span.Text-sc-17v1xeu-0.qaOIC.search-match')}
  get PricingLink(){ return $('a.HeaderMenu-link.no-underline.px-0.px-lg-2.py-3.py-lg-2.d-block.d-lg-inline-block')}
  
  async scrollToTitle() {
    return await this.Title.scrollIntoView()
  }

  async isTitleDisplayed() {
  return await this.Title.isDisplayed()
}
  async clickOnStartBtn() {
  await this.StartBtn.click()
}
async clickOnEnterpriseCloudButton() {
  await this.EnterpriseCloudButton.click()
}
async scrollToSubscribeLink() {
  await this.SubscribeLink.scrollIntoView({ behavior: 'smooth' })
}
async clickOnSubscribeLink() {
  await this.SubscribeLink.click()
}
async SubscribeLinkIsClickable() {
  return await this.SubscribeLink.isClickable()
}
async clickOnSearchItem() {
  await this.SearchItem.click()
}
async addValueInSearchInput(value) {
  await this.SearchInput.addValue(value)
}
async SearchResultText() {
  await this.SearchResult.getText()
}

async clickOnPricingLink() {
  await this.PricingLink.click()
}
}
export default new MainPage()