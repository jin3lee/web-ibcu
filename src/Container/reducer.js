import { PAGE_ID_HOME, PAGE_ID_CAMPUS, PAGE_ID_APPLY } from "./actionTypes";

const initialState = {
	pageId: PAGE_ID_APPLY,
}

export default function reducer( state = initialState, payload ) {
	console.log("container.reducer: ", payload );
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
    default: {
      return { ...state }
    }
	}
}
