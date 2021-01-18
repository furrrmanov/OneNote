import { combineReducers } from 'redux'

import user from './userReduser'
import profiles from './userProfileReducer'
import notebook from './notebookReducer'
import messages from './messagesReducer'

export default combineReducers({ user, profiles, notebook, messages })
