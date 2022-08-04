import { combineReducers } from "redux";
// import homepageReducers from "./homepageReducers";
import starWarsReducers from "./starWarsReducers";
// import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    // homepageReducers,
    starWarsReducers,
    // form: formReducer,
});

export default rootReducer;
