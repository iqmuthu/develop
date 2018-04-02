
const initialState = {
    yourName:'',
    partnerName:''
};
export default function(state = initialState, action) {
    let { type, value} = action;    
	switch (type) {
	case 'YOUR_NAME':
        return Object.assign({}, state, {yourName:value});
    case 'PARTNER_NAME':
        return Object.assign({}, state, {partnerName:value});
    case 'RESET_FIELD':
        return Object.assign({}, state, initialState );
	default: return state;
	}
}
