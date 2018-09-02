import { combineReducers } from 'redux';
import BudgetReducer from './budgetReducer'
import GoalReducer from './goalReducer'

const rootReducer = combineReducers({
  BudgetReducer,
  GoalReducer
})

export default rootReducer
