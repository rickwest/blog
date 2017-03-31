import { FETCH_POSTS, FETCH_SINGLE_POST, DELETE_POST } from '../actions/index';

const INITIAL_STATE = {
    all: [],
    singlePost: null
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
    case FETCH_POSTS:
        return { ...state, all:action.payload.data };
    case FETCH_SINGLE_POST:
        return {...state, singlePost:action.payload.data};
    default:
        return state;
    }
}