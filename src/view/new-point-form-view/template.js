import { createDestinationBlockTemplate } from '../common-templates/destination-block-template';
import { createDestinationChoosingTemplate } from '../common-templates/destination-choosing-template';
import { createEventPriceTemplate } from '../common-templates/event-price-template';
import { createEventTimeTemplate } from '../common-templates/event-time-template';
import { createEventTypeChoosingTemplate } from '../common-templates/event-type-choosing-template';
import { createOfferBlockTemplate } from '../common-templates/offer-block-template';

function createNewPointFormTemplate({pointData}) {
  const {
    type,
    destination,
    dateFrom,
    dateTo,
    basePrice,
    offers,
  } = pointData;

  return `<form class="event event--edit" action="#" method="post">
            <header class="event__header">
              ${createEventTypeChoosingTemplate(type)}
              ${createDestinationChoosingTemplate(type, destination)}
              ${createEventTimeTemplate(dateFrom, dateTo)}
              ${createEventPriceTemplate(basePrice)}
              <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
              <button class="event__reset-btn" type="reset">Cancel</button>
            </header>
            ${(offers.length === 0 && !destination.id) ? '' : `<section class="event__details">
              ${createOfferBlockTemplate(offers)}
              ${createDestinationBlockTemplate(destination)}
            </section>`}
          </form>`;
}

export {
  createNewPointFormTemplate,
};
