import Widget from './Widget';

const widget = new Widget('https://salty-bayou-98244.herokuapp.com/');

widget.bindToDOM(document.querySelector('.page__list'));
widget.init();
