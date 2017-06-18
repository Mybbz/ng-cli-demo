import { NgCliDemoPage } from './app.po';

describe('ng-cli-demo App', () => {
  let page: NgCliDemoPage;

  beforeEach(() => {
    page = new NgCliDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
