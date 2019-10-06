import { UPDATE_PAGE, PAGE_ID_CAMPUS, PAGE_ID_HOME } from "./actionTypes";

export const updatePage = ( pageId ) => {
  return ({
    type: UPDATE_PAGE,
    pageId: pageId,
  });
}
