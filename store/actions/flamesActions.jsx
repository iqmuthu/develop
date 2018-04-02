export const updateYourName= (data) => {
	return (dispatch) => {
		dispatch({type:'YOUR_NAME', value: data});
	};
};
export const updatePartnerName= (data) => {    
	return (dispatch) => {
		dispatch({type:'PARTNER_NAME', value: data});
	};
};
export const resetFlamesField= () => {    
	return (dispatch) => {
		dispatch({type:'RESET_FIELD'});
	};
};
