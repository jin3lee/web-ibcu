import { UPDATE_PAGE, DISPLAY_SIDEBAR } from "./actionTypes";

export const updatePage = ( pageId ) => {
  return ({
    type: UPDATE_PAGE,
    pageId: pageId,
  });
}

export const displaySidebar = ( displaySidebar ) => {
  return ({
    type: DISPLAY_SIDEBAR,
    displaySidebar: displaySidebar,
  });
}