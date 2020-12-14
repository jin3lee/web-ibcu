import { combineReducers } from 'redux'

import pageDimensions from './../../Components/PageDimensions/reducer'
import navigator from './../../Components/Navigator/reducer'
import translationToggle from './../../Components/TranslationToggle/reducer'
import rootContainer from './../../Container/reducer'

export default combineReducers({
	pageDimensions,
	navigator,
	translationToggle,
	rootContainer,
})
