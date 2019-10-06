import { NAVIGATE_TO_PAGE_ID } from "./actionTypes";

const initialState = {
}

export default function reducer( state = initialState, payload ) {
	switch ( payload.type ) {
		case NAVIGATE_TO_PAGE_ID: {
			return { ...state, pageId: payload.pageId };
		}
    default: {
      return { ...state }
    }
	}
}
