import { combineReducers } from 'redux'
import current_stage from './current_stage'
import stages from './stages'
import cities from './cities'
import countries from './countries'

export default combineReducers({
  cities,
  countries,
  current_stage,
  stages
})