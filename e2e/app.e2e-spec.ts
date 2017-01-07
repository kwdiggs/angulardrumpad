import { DrumPadPage } from './app.po';

describe('drum-pad App', function() {
  let page: DrumPadPage;

  beforeEach(() => {
    page = new DrumPadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
