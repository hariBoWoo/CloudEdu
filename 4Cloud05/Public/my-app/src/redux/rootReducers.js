import { combineReducers } from "redux";
import subscriberReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";

const rootReducers = combineReducers({
    views: viewsReducer,
    subscribers:subscriberReducer
    
})

export default rootReducers