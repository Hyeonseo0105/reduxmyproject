import {
    FETCH_BOOK_LIST, FETCH_NOVEL_LIST, FETCH_IT_LIST, FETCH_NEW_LIST,
    FETCH_BOOK_DETAIL, FETCH_BOOK_FIND, FETCH_BHOME_LIST
} from "../actions/types";

const bookState={
    book_list:{},
    novel_list:{},
    it_list:{},
    new_list:{},
    book_detail:{},
    find_list:{},
    bList:{}
}

export default function (state=bookState,action){
    switch (action.type)
    {
        case FETCH_BHOME_LIST:
            return {
                ...state,
                bList: action.payload
            }
        case FETCH_BOOK_LIST:
            return {
                ...state,
                book_list: action.payload
            }
        case FETCH_NOVEL_LIST:
            return {
                ...state,
                novel_list:action.payload
        }
        case FETCH_IT_LIST:
            return {
                ...state,
                it_list:action.payload
            }
        case FETCH_NEW_LIST:
            return {
                ...state,
                new_list:action.payload
            }
        case FETCH_BOOK_DETAIL:
            return {
                ...state,
                book_detail:action.payload
            }
        case FETCH_BOOK_FIND:
            return {
                ...state,
                find_list:action.payload
            }
        default:
            return state
    }

}