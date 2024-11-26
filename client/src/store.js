import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { userLoginReducer, userRegisterReducer,  } from './reducers/userReducers';
import { taskCreateReducer, taskDeleteReducer, taskListReducer, taskUpdateReducer } from './reducers/tasksReducers';
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    taskList: taskListReducer,
    taskCreate: taskCreateReducer,
    taskUpdate : taskUpdateReducer,
    taskDelete: taskDeleteReducer,
});
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);
export default store;