import { HocPage } from './app.po';

describe('hoc App', () => {
  let page: HocPage;

  beforeEach(() => {
    page = new HocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
