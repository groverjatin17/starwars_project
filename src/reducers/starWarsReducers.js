import {
    SELECTED_PEOPLE,
} from "../actions/Homepage.actions";

const initialState = {
    selectedPeople: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case SELECTED_PEOPLE:
            return {
                ...state,
                selectedPeople: action.payload,
            };

        default:
            return state;
    }
}
