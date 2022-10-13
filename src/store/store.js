import {createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import  {composeWithDevTools} from 'redux-devtools-extension'
import { TodoReducer } from '../reducers/TodoReducers';
import { GoalReducer } from '../reducers/AddGoalReducers';

const reducer = combineReducers({
   Todo: TodoReducer,
   Goal: GoalReducer,
})


const initialState = {}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;