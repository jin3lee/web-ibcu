import { UPDATE_SITE_WIDTH, UPDATE_SITE_HEIGHT } from "./actionTypes";

export const updateSiteWidth = width => {
  return ( {
    type: UPDATE_SITE_WIDTH,
    width: width,
  });
}

export const updateSiteHeight = height => (
  {
    type: UPDATE_SITE_HEIGHT,
    height: height,
  }
);
