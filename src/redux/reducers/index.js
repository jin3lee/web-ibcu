import { combineReducers } from 'redux'

import pageDimensions from './../../Components/PageDimensions/reducer'
import navigater from './../../Components/Navigater/reducer'
import rootContainer from './../../Container/reducer'

export default combineReducers({
	pageDimensions,
	navigater,
	rootContainer,
})
