import { combineReducers } from "redux";
import imageReducer from "./Reducer";


const reducer=combineReducers({
    img:imageReducer
})
export default reducer;