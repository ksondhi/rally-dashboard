import { RallyDashboardPage } from './app.po';

describe('rally-dashboard App', () => {
  let page: RallyDashboardPage;

  beforeEach(() => {
    page = new RallyDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
