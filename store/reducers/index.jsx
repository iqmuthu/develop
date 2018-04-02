import { combineReducers } from "redux";
import rootName from "./rootName";
import studentDetails from "./studentReducer";
import flames from "./flamesReducer";
export default combineReducers({
    rootName,
    studentDetails,
    flames
});
