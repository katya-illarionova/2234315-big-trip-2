import AbstractView from '../framework/view/abstract-view.js';
import { NoPointsTextType } from '../const.js';

function createNoPointsTemplate(filterType) {
  const noPointsText = NoPointsTextType[filterType];

  return (
    `<p class="trip-events__msg">${noPointsText}</p>`
  );
}

export default class NoPointsView extends AbstractView {
  #filterType = null;

  constructor({ filterType }) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoPointsTemplate(this.#filterType);
  }
}
