import MainPage from '@/scripts/components/main-page';
import Page from '@/scripts/tempaltes/page';
import SettingsPage from '@/scripts/components/settings-page';

export default class App {
  private container: HTMLElement;
  private initialPage: MainPage;
  static PAGES_MAP = {
    main: MainPage,
    settings: SettingsPage,
  };

  constructor() {
    this.container = document.body;
    this.initialPage = new MainPage();
  }

  private renderNewPage(page: Page): void {
    this.container.innerHTML = '';

    this.container.append(page.render());
  }

  private enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      //const page = App.PAGES_MAP[hash];
      //this.renderNewPage(new page());
    });
  }

  run(): void {
    this.renderNewPage(new App.PAGES_MAP.main());
    this.enableRouteChange();
  }
}
