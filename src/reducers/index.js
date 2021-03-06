import { combineReducers } from 'redux'
import current_stage from './current_stage'
import stages from './stages'
import cities from './cities'
import countries from './countries'
import authinfo from './authinfo'
import current_form_state from './current_form_state'

export default combineReducers({
  cities,
  countries,
  current_stage,
  stages,
  authinfo,
  current_form_state
})