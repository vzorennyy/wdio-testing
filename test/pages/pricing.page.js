class PricingPage{

  get Title() { return $('h1.h2-mktg')} 
  get CompareLink() { return $('/html/body/div[1]/div[4]/main/div[2]/div[2]/div[3]/a')}
  get CompareTitle() { return $('/html/body/div[1]/div[4]/main/div[4]/h1')}

async scrollToCompareLink() {
  await this.CompareLink.scrollIntoView({ behavior: 'smooth' })
}
async clickOnCompareLink() {
  await this.CompareLink.click()
}
}
export default new PricingPage()