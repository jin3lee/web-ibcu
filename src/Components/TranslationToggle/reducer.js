import { UPDATE_LANGUAGE } from "./actionTypes";
import { 
	LANGUAGE_ENGLISH,
	LANGUAGE_KOREAN 
} from "./actionTypes";


const initialState = {
	language: null,
}

export default function reducer( state = initialState, payload ) {
	switch ( payload.type ) {
		case UPDATE_LANGUAGE: {
			return { ...state, language: payload.language };
		}

		default: {
			return { ...state }
		}
	}
}
