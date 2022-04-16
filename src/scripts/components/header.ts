import Component from '@/scripts/tempaltes/component';

const Buttons = [
  {
    title: 'Главная',
    href: 'main',
  },
  {
    title: 'Настройки',
    href: 'settings',
  },
  {
    title: 'Статистика',
    href: 'stat',
  },
];

class Header extends Component {
  renderPageButtons(): void {
    const pageButtons = document.createElement('div');
    Buttons.forEach(({ title, href }) => {
      const buttonHtml = document.createElement('a');
      buttonHtml.href = '#' + href;
      buttonHtml.innerText = title;

      pageButtons.append(buttonHtml);
    });

    this.container.innerHTML = '';
    this.container.append(pageButtons);
  }

  render(): HTMLElement {
    this.renderPageButtons();
    return this.container;
  }
}

export default Header;
