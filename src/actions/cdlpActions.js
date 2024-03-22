import {FETCH_CDLP_LIST,FETCH_CLASSIC_LIST,FETCH_CDLP_DETAIL,FETCH_CHOME_LIST} from "./types";
import axios from "axios";

export const fetchChomeList=()=>dispatch=>{
    axios.get('http://localhost/')
        .then((response=>{
            const action={
                type:FETCH_CHOME_LIST,
                payload:response.data
            }
            dispatch(action)
        }))
}
export const fetchcdlpList=(page)=>dispatch=>{
    axios.get('http://localhost/cdlp/list_redux',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_CDLP_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchclassicList=(page)=>dispatch=>{
    axios.get('http://localhost/cdlp/classic_list_redux',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_CLASSIC_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchcdlpDetail=(no)=>dispatch=>{
    axios.get('http://localhost/cdlp/detail_redux',{
        params:{
            no:no
        }
    }).then(response=>{
        const action={
            type:FETCH_CDLP_DETAIL,
            payload:response.data
        }
        dispatch(action)
    })
}