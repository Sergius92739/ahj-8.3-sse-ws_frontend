import Widget from './Widget';

const widget = new Widget('http://localhost:7070/sse');

widget.bindToDOM(document.querySelector('.page__list'));
widget.init();
