
const initialState = {
    studentList:[],
    searchValue:''
};
export default function(state = initialState, action) {
    let { type, value, payload} = action;    
	switch (type) {
	case 'UPDATE_STUDENT_DETAILS':
        return Object.assign({}, state, {studentList:payload});
    case 'SEARCH_ITEM':
        return Object.assign({}, state, {searchValue:value});
	default: return state;
	}
}
