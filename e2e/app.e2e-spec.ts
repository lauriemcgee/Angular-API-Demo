import { DemoApiAppPage } from './app.po';

describe('demo-api-app App', () => {
  let page: DemoApiAppPage;

  beforeEach(() => {
    page = new DemoApiAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
