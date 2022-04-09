import Page from '@/scripts/tempaltes/page';

export default class MainPage extends Page {
  static TextObject = {
    MainTitle: 'Main Page',
  };

  render(): HTMLElement {
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}
