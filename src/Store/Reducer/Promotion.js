import * as actionTypes from '../Action/Action';


const initialState = {
    promocode: '',
    discount: 1,
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.APPLYCODE) {
        return {
            ...state,
            discount: action.discount,
        }
    }
    return state;

}

export default reducer;
