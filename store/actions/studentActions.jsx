
export const updateStudentDetails= (data) => {
	return (dispatch) => {
		dispatch({type:'UPDATE_STUDENT_DETAILS', payload: data});
	};
};
export const updateSearchName= (data) => {    
	return (dispatch) => {
		dispatch({type:'SEARCH_ITEM', value: data});
	};
};
