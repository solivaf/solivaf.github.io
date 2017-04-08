import { EmailValuePage } from './app.po';

describe('email-value App', () => {
  let page: EmailValuePage;

  beforeEach(() => {
    page = new EmailValuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
