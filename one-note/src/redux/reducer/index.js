import { combineReducers } from 'redux'

import user from './userReduser'
import profiles from './userProfileReducer'
import entities from './entityReducer'
import messages from './messagesReducer'

export default combineReducers({ user, profiles, entities, messages })
