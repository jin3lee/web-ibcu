import { PAGE_ID_HOME, PAGE_ID_CAMPUS } from "./actionTypes";

const initialState = {
	pageId: PAGE_ID_HOME,
}

export default function reducer( state = initialState, payload ) {
	console.log("container.reducer: ", payload );
	switch ( payload.pageId ) {
		case PAGE_ID_HOME: {
			return { ...state, pageId: payload.pageId };
		}
		case PAGE_ID_CAMPUS: {
			console.log("reducer");
			return { ...state, pageId: payload.pageId };
		}
    default: {
      return { ...state }
    }
	}
}
