export default class Widget {
  constructor(url) {
    this.container = null;
    this.url = url;

    this.onAction = this.onAction.bind(this);
    this.onFreekick = this.onFreekick.bind(this);
    this.onGoal = this.onGoal.bind(this);
  }

  static cleanDate(str) {
    const temp1 = str.split(' ');
    this.date = [temp1[1], temp1[0].slice(0, -1)].join(' ');
    return this.date;
  }

  init() {
    this.checkBinding();
    this.sse = new EventSource(this.url);
    this.sse.addEventListener('action1', this.onAction);
    this.sse.addEventListener('action2', this.onAction);
    this.sse.addEventListener('freekick', this.onFreekick);
    this.sse.addEventListener('goal', this.onGoal);
  }

  onAction(evt) {
    if (evt.data) {
      const data = JSON.parse(evt.data);
      this.container.insertAdjacentHTML('beforeend', `<li class="list__item">
      <div class="list-item__date">${Widget.cleanDate(data.date)}</div>
      <div class="list-item__comment">
        <div class="list-item__icon"></div>
        <div class="list-item__text">${data.comment}</div>
      </div>
    </li>`);
    }
  }

  onFreekick(evt) {
    if (evt.data) {
      const data = JSON.parse(evt.data);
      this.container.insertAdjacentHTML('beforeend', `<li class="list__item">
      <div class="list-item__date">${Widget.cleanDate(data.date)}</div>
      <div class="list-item__comment">
        <div class="list-item__icon freekick"></div>
        <div class="list-item__text">${data.comment}</div>
      </div>
    </li>`);
    }
  }

  onGoal(evt) {
    if (evt.data) {
      const data = JSON.parse(evt.data);
      this.container.insertAdjacentHTML('beforeend', `<li class="list__item">
      <div class="list-item__date">${Widget.cleanDate(data.date)}</div>
      <div class="list-item__comment">
        <div class="list-item__icon goal"></div>
        <div class="list-item__text">${data.comment}</div>
      </div>
    </li>`);
    }
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('Table not bind to DOM');
    }
  }
}
