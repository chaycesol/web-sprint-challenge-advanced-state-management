import * as ACTIONS from '../actions';

const initialState = {
    smurfData: [],
    isLoading: false,
    error: '',
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true,
            };
        case ACTIONS.FETCH_SMURF_SUCCESS:
            return{
                ...state,
                isLoading: false,
                smurfData: action.payload,
            }    
        default:
            return state;
    }
};