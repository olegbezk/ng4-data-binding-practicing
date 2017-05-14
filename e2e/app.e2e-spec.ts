import { PracticingPropertyAndEventBindingAndViewEncapsulationPage } from './app.po';

describe('practicing-property-and-event-binding-and-view-encapsulation App', function() {
  let page: PracticingPropertyAndEventBindingAndViewEncapsulationPage;

  beforeEach(() => {
    page = new PracticingPropertyAndEventBindingAndViewEncapsulationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
