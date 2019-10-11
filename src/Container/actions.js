import { UPDATE_PAGE } from "./actionTypes";

export const updatePage = ( pageId ) => {
  return ({
    type: UPDATE_PAGE,
    pageId: pageId,
  });
}
