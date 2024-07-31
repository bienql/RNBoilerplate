import {
  CLAIM_GIFT,
  DEALS_SCREEN,
  DEAL_DETAIL_SCREEN,
  EVENT_DETAIL,
  HOME_DRAWER,
  NOTIFICATION_SCREEN,
  PROMOTIONS_SCREEN,
  PROMOTION_DETAIL_SCREEN,
} from 'app/navigation/screenNames';

export function getScreenToNavigateNotification(
  category: string | undefined,
  id: string | null,
): string {
  category = category?.toLowerCase();

  switch (category) {
    case 'message_detail':
    case 'notifications':
      return NOTIFICATION_SCREEN;

    case 'deals':
      if (id) {
        return DEAL_DETAIL_SCREEN;
      } else {
        return DEALS_SCREEN;
      }

    case 'events':
      return EVENT_DETAIL;

    case 'promotions':
      if (id) {
        return PROMOTION_DETAIL_SCREEN;
      } else {
        return PROMOTIONS_SCREEN;
      }

    default:
      return HOME_DRAWER;
  }
}

export function getScreenToNavigateDynamicLinks(category: string | undefined) {
  category = category?.toLowerCase();

  switch (category) {
    case 'promotion':
      return PROMOTION_DETAIL_SCREEN;

    case 'event':
      return EVENT_DETAIL;

    case 'deal':
      return DEAL_DETAIL_SCREEN;

    case 'gift':
      return CLAIM_GIFT;

    default:
      return HOME_DRAWER;
  }
}

export function getDataFromDynamicLinks(url: string = '') {
  url = decodeURIComponent(url);

  let path = [],
    id = '',
    category = '';

  if (url.includes('?type=')) {
    path = url.split('?');
    category = path[1]?.split('=')[1];
    id = path[2]?.split('=')[1];
  } else {
    path = url.split('/');
    id = path[path.length - 1];
    category = path[path.length - 2];
  }

  return { category, id };
}
