import { SET_NAME } from '@/modules/hello/actions/types';

// eslint-disable-next-line import/prefer-default-export
export const setName = name => {
    return {
        type: SET_NAME,
        payload: name,
    };
};
