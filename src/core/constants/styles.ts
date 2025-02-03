export const BREAKPOINTS = {
  MOBILE: '(min-width: 360px)',
  TABLET: '(min-width: 768px)',
  DESKTOP_S: '(min-width: 1280px)',
  DESKTOP: '(min-width: 1536px)',
};

export const DEVICES = {
  MOBILE: 'only screen and (max-width: 767px)',
  TABLET: `only screen and ${BREAKPOINTS.TABLET} and (max-width: 1279px)`,
  DESKTOP: `only screen and ${BREAKPOINTS.DESKTOP_S}`,
};

export const MAX_CONTENT_WIDTH_PX = '1536px';

export const Z_INDEX_PRELOADER = 9999;
export const Z_INDEX_DROPDOWN = 99;
export const Z_INDEX_MODAL = 100;
