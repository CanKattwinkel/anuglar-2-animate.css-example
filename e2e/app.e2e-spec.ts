import { AnimationExamplePage } from './app.po';

describe('animation-example App', function() {
  let page: AnimationExamplePage;

  beforeEach(() => {
    page = new AnimationExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
