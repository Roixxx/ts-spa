import Page from '@/scripts/tempaltes/page';

export default class ErrorPage extends Page {
  constructor() {
    super();
    this.textObject = {
      title: '404 Страница не найдена',
    };
  }
}
