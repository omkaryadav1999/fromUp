import { combineReducers } from "redux";
import Reducers from "./reducer";
import UserData from "./FormData";
const rootReducers = combineReducers(
    {
        Reducers, UserData
    }

)

export default rootReducers