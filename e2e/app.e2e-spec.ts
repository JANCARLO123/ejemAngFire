import { EjemAngFirePage } from './app.po';

describe('ejem-ang-fire App', function() {
  let page: EjemAngFirePage;

  beforeEach(() => {
    page = new EjemAngFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
