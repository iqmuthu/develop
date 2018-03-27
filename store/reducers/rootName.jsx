
const initialState = {
	displayName:''
};
export default function(state = initialState, action) {
	let { type, value} = action;
	switch (type) {
	case 'UPDATE_DISPLAY_NAME':
		return Object.assign({}, state, {displayName: value});
	default: return state;
	}
}
