import Page from '@/scripts/tempaltes/page';

export default class MainPage extends Page {
  constructor() {
    super();
    this.textObject = {
      title: 'Главная страница',
    };
    this.body = `
      <p>Добро пожаловать на главнейшую страницу</p>
      <p>Типо текст</p>
    `;
  }
}
