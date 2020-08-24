import './styles/tabs.css'

export default class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll('.trigger');
    this.content = container.querySelectorAll('.content');
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', e => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }

  toggleTabs(e) {
    // remove active classes
    this.tabs.forEach(tab => tab.classList.remove('active'));
    // add active class to clicked tab
    e.target.classList.add('active');
  }

  toggleContent(e) {
    // remove active classes
    this.content.forEach(item => item.classList.remove('active'));
    // add active class to content
    const activeContent = this.container.querySelector(e.target.dataset.target);
    activeContent.classList.add('active');
  }
}
