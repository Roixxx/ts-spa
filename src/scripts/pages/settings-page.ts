import Page from '@/scripts/tempaltes/page';

export default class SettingsPage extends Page {
  constructor() {
    super();
    this.textObject = {
      title: 'Страница настроек',
    };
    this.body = `
      <p>Здесь можно что-то настроить</p>
      <input>
      <label>
        Радио
        <input type="radio">
      </label>  
      <label>
        Радио 2
        <input type="radio">
      </label>  
    `;
  }
}
