import { combineReducers } from "redux";
import rootName from "./rootName";
import studentDetails from "./studentReducer";
export default combineReducers({
    rootName,
    studentDetails
});
