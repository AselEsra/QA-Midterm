const LoginPage = require('../pageobjects/login.page');
const ClientsPage = require('../pageobjects/clients.page');

describe('Login page', () => {
  before(async () => {
    LoginPage.open();
  });

  it('should allow a user to log in successfully', async () => {
    await LoginPage.login('Admin', 'Admin@Navi');
  });

  it('should add a new client and select it', async () => {
    await ClientsPage.clickAddClientButton();
    await ClientsPage.fillClientForm('Ozyilmaz', 'Asel', 'asel@gmail.com', '706192234', '4/5/2000', 'female');
    await ClientsPage.clickSaveButton();
    await ClientsPage.clickCloseButton();
    await browser.pause(10000);
  });

  
});