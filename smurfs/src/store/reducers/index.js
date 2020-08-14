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
            };
        case ACTIONS.FETCH_SMURF_FAILURE:
            return {
                ...state,
                isLoading: false,
                smurfData: [],
                error: action.payload,
            };
        case ACTIONS.POST_SMURF_START:
            return {
                ...state,
                isLoading: true,
            };      
        default:
            return state;
    }
};