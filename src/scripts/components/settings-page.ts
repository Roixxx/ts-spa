import Page from '@/scripts/tempaltes/page';

export default class SettingsPage extends Page {
  static TextObject = {
    MainTitle: 'Settings Page',
  };

  render(): HTMLElement {
    const title = this.createHeaderTitle(SettingsPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}
