import { SET_NAME } from '@/modules/hello/actions/types';

const INITIAL_STATE = {
    name: null,
};

// eslint-disable-next-line import/prefer-default-export
export const helloReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
};
