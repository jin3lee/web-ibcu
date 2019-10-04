import { combineReducers } from 'redux'

import pageDimensions from './../../Components/PageDimensions/reducer'
import rootContainer from './../../Container/reducer'

export default combineReducers({
	pageDimensions,
	rootContainer,
})
