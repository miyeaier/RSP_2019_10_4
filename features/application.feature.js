require('../spec.helper');

describe('User can input a value and get RSP results', () => {
  
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(async () => {
    await browser.close();
  });

  it('renders the correct page title', async () => {
    expect(await browser.page.title()).to.eql('Puppeteer Mocha Scaffold');
  });

  it('clicks on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", { with: "rock" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Tie');
  });

  // it('clicks on the "Check" button, before entering string', async () => {
  //   await browser.fillIn("input[id='value']", { with: "" })
  //   await browser.clickOnButton("input[value='Check']")
  //   let content = await browser.getContent("[id='display_answer']")
  //   expect(content).to.eql('Correct your input');
  // })

});