import { init } from "./init";

// Action Types
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_LOC = "UPDATE_LOC";

// Reducer Function
export const appReducer = (state = init, action) => {
    switch (action.type) {
        case UPDATE_NAME:
            return { ...state, name: action.payload };
        case UPDATE_LOC:
            return { ...state, loc: action.payload };
        default:
            return state;
    }
};

// Action Creators
export const updateName = (name) => ({ type: UPDATE_NAME, payload: name });
export const updateLoc = (loc) => ({ type: UPDATE_LOC, payload: loc });
