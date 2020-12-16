import { UPDATE_LANGUAGE } from "./actionTypes";

import { 
	LANGUAGE_ENGLISH,
	LANGUAGE_KOREAN 
} from "./actionTypes";

import english from './../../locate/en/translate.json';
import korean from './../../locate/kr/translate.json';

const initialState = {
	language: LANGUAGE_ENGLISH,
	translation: english,
}

export default function reducer( state = initialState, payload ) {
	switch ( payload.type ) {
		case UPDATE_LANGUAGE: {
			if( payload.language === LANGUAGE_KOREAN ) {
				return { 
					...state,
					language: payload.language,
					translation: korean 
				};
			}
			return { 
				...state, 
				language: payload.language,
				translation: english,
			};
		}
		default: {
			return { ...state }
		}
	}
}
