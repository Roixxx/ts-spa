export default abstract class Page {
  protected container: HTMLElement;
  protected textObject: { title: string };
  body: string;

  constructor() {
    this.container = document.createElement('div');
    this.textObject = {
      title: 'Заголовок',
    };
    this.body = `<p>Body<p>`;
  }

  protected createTitle(text: string): HTMLElement {
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = text;
    return headerTitle;
  }

  protected createBody(text: string): HTMLElement {
    const div = document.createElement('div');
    div.innerHTML = this.body;
    return div;
  }

  render(): HTMLElement {
    const title = this.createTitle(this.textObject.title);
    const body = this.createBody(this.body);
    this.container.append(title);
    this.container.append(body);
    return this.container;
  }
}
