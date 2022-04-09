import Page from '@/scripts/tempaltes/page';

export default class StatPage extends Page {
  static TextObject = {
    MainTitle: 'Stat Page',
  };

  render(): HTMLElement {
    const title = this.createHeaderTitle(StatPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}
