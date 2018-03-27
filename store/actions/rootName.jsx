export const updateDisplayName= (data) => {
	return (dispatch) => {
		dispatch({type:'UPDATE_DISPLAY_NAME', value: data});
	};
};
