import getScreenRatio from 'app/utils/responsive';

const ratio = getScreenRatio();

export const iconSize = {
  WH10: {
    width: 10 * ratio,
    height: 10 * ratio,
  },
  WH15: {
    width: 15 * ratio,
    height: 15 * ratio,
  },
  WH20: {
    width: 20 * ratio,
    height: 20 * ratio,
  },
  WH30: {
    width: 30 * ratio,
    height: 30 * ratio,
  },
  WH50: {
    width: 50 * ratio,
    height: 50 * ratio,
  },
};
