import { 
	UPDATE_PAGE,
	PAGE_ID_HOME, 
	PAGE_ID_CAMPUS, 
	PAGE_ID_APPLY, 
	PAGE_ID_ABOUT, 
	PAGE_ID_ACADEMICS, 
	PAGE_ID_STAFF 
} from "./actionTypes";

import { 
	DISPLAY_SIDEBAR, 
} from "./actionTypes";

const initialState = {
	pageId: PAGE_ID_ABOUT,
	displaySidebar: false,
}

export default function reducer( state = initialState, payload ) {
	if( payload.type === UPDATE_PAGE ) {
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
				return { state }
			}
		}
	} else if( payload.type === DISPLAY_SIDEBAR ) {
		return { ...state, displaySidebar: payload.displaySidebar };
	} else {
		//console.log("random action reduced", payload);
		return { ...state };
	}
}
