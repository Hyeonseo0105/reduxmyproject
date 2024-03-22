import {FETCH_CDLP_LIST, FETCH_CLASSIC_LIST,FETCH_CDLP_DETAIL,FETCH_CHOME_LIST} from "../actions/types";

const cdlpState={
    cdlp_list:{},
    classic_list:{},
    cdlp_detail:{},
    cList:{}
}

export default function (state=cdlpState,action){
    switch (action.type)
    {
        case FETCH_CHOME_LIST:
            return {
                ...state,
                cList: action.payload
            }
        case FETCH_CDLP_LIST:
            return {
                ...state,
                cdlp_list: action.payload
            }
        case FETCH_CLASSIC_LIST:
            return {
                ...state,
                classic_list: action.payload
            }
        case FETCH_CDLP_DETAIL:
            return {
                ...state,
                cdlp_detail:action.payload
            }
        default:
            return state
    }

}