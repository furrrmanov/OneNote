import { combineReducers } from 'redux'

import user from './userReduser'
import profiles from './userProfileReducer'
import notebook from './notebook'

export default combineReducers({ user, profiles, notebook })
