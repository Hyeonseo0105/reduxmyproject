import {combineReducers} from "redux";
import bookReducer from "./bookReducer";
import cdlpReducer from "./cdlpReducer";
import boardReducer from "./boardReducer";

export default combineReducers({
    books:bookReducer,
    cdlps:cdlpReducer,
    boards:boardReducer
})