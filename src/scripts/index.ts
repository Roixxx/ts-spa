import PAGES_MAP from '@/scripts/pagesMap';
import Header from '@/scripts/components/header';

export default class App {
  private container: HTMLElement;
  private header: Header;

  constructor() {
    this.container = document.body;
    this.header = new Header('header', 'header');
  }

  private renderNewPage(pageId: string): void {
    if (!PAGES_MAP[pageId]) pageId = 'error';
    const page = new PAGES_MAP[pageId]();

    this.container.innerHTML = '';
    this.container.append(this.header.render());
    this.container.append(page.render());
  }

  private enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      this.renderNewPage(hash);
    });
  }

  run(): void {
    let page = window.location.hash.slice(1);
    if (!window.location.hash) page = 'main';

    this.renderNewPage(page);
    this.enableRouteChange();
  }
}
