import { createElement } from '../../render';
import { createFilterListTemplate } from './template';
export default class FilterListView {
  getTemplate() {
    return createFilterListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
