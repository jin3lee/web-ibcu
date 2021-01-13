import { UPDATE_SITE_WIDTH, UPDATE_SITE_HEIGHT } from "./actionTypes";

const initialState = {
	width: null,
  	height: null,
}

export default function reducer( state = initialState, payload ) {
	switch ( payload.type ) {
		case UPDATE_SITE_WIDTH: {
			return { ...state, width: payload.width };
		}

		case UPDATE_SITE_HEIGHT: {
			return { ...state, height: payload.height }
		}

    default: {
      return { ...state }
    }
	}
}
