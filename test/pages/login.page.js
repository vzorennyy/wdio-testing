class LoginPage{

  get SignUpBtn() { return $('/html/body/div[1]/div[1]/header/div/div[2]/div/div/a')} 
  get Text() { return $('span[data-target="typing-effect.content"].text-mono.text-gray-light-mktg')}
  get EmailInput() { return $('#email')}
  get ContinueBtn(){ return $('[class="js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0"]')}
  get PasswordInput() { return $('#password')}
  get ContinueBtn2(){ return $('//*[@id="password-container"]/div[2]/button')}
  get UserNameInput() { return $('#login')}
  get ContinueBtn3(){ return $('//*[@id="username-container"]/div[2]/button')}
  get ConfirmInput(){ return $('//*[@id="opt_in"]')}
  get ContinueBtn4(){ return $('//*[@id="opt-in-container"]/div[2]/button')}
  
  
  async clickOnSignUpBtn() {
    await this.SignUpBtn.click()
}
  async isTextDisplayed() {
  return await this.Text.isDisplayed()
}
  async EmailInputAddValue (value) {
  await this.EmailInput.addValue(value)
}
async clickOnContinueBtn() {
  await this.ContinueBtn.click()
}
async PasswordInputAddValue (value) {
  await this.PasswordInput.addValue(value)
}
async clickOnContinueBtn2() {
  await this.ContinueBtn2.click()
}
async UserNameInputAddValue (value) {
  await this.UserNameInput.addValue(value)
}
async clickOnContinueBtn3() {
  await this.ContinueBtn3.click()
}
async ConfirmInputAddValue (value) {
  await this.ConfirmInput.addValue(value)
}

async clickOnContinueBtn4() {
  await this.ContinueBtn4.click()
}

}
export default new LoginPage()