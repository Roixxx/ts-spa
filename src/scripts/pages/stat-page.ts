import Page from '@/scripts/tempaltes/page';

export default class StatPage extends Page {
  constructor() {
    super();
    this.textObject = {
      title: 'Страница статистики',
    };
    this.body = `
      <p>На этой страницы есть статистика</p>
      <p>(просто вы её не видете)</p>
    `;
  }
}
