import { NAVIGATE_TO_PAGE_ID } from "./actionTypes";

export const navigateToPage = pageId => {
  console.log("navigateToPage: ", pageId);
  return ( {
    type: NAVIGATE_TO_PAGE_ID,
    pageId: pageId,
  });
}
