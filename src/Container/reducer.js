import { PAGE_ID_HOME, PAGE_ID_CAMPUS, PAGE_ID_APPLY, PAGE_ID_ABOUT, PAGE_ID_ACADEMICS, PAGE_ID_STAFF } from "./actionTypes";

const initialState = {
	pageId: PAGE_ID_ABOUT,
}

export default function reducer( state = initialState, payload ) {
	switch ( payload.pageId ) {
		case PAGE_ID_HOME: {
			return { ...state, pageId: payload.pageId };
		}
		case PAGE_ID_CAMPUS: {
			return { ...state, pageId: payload.pageId };
		}
		case PAGE_ID_APPLY: {
			return { ...state, pageId: payload.pageId };
		}
		case PAGE_ID_ABOUT: {
			return { ...state, pageId: payload.pageId };
		}
		case PAGE_ID_ACADEMICS: {
			return { ...state, pageId: payload.pageId };
		}
		case PAGE_ID_STAFF: {
			return { ...state, pageId: payload.pageId };
		}
    default: {
      return { ...state }
    }
	}
}
