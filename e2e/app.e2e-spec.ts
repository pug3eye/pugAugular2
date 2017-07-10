import { PugAugularPage } from './app.po';

describe('pug-augular App', () => {
  let page: PugAugularPage;

  beforeEach(() => {
    page = new PugAugularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
