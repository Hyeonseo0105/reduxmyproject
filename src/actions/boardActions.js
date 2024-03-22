import {FETCH_BOARD_LIST, FETCH_BOARD_INSERT, FETCH_BOARD_DETAIL,
        FETCH_BOARD_UPDATE, FETCH_BOARD_UPDATE_DATA, FETCH_BOARD_DELETE,} from "./types";
import axios from "axios";

export const fetchboardList=(page)=>dispatch=>{
    axios.get('http://localhost/board/list_redux',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_BOARD_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchboardInsert=(insertData)=>dispatch=>{
    axios.post('http://localhost/board/insert_redux',null,{
        params:insertData
    }).then(response=>{
        const action={
            type:FETCH_BOARD_INSERT,
            payload: response.data
        }
        dispatch(action)
    })
}
export const fetchBoardDetail=(no)=>dispatch=>{
    axios.get('http://localhost/board/detail_redux',{
        params:{
            no:no
        }
    }).then(response=>{
        const action={
            type:FETCH_BOARD_DETAIL,
            payload: response.data
        }
        dispatch(action)
    })
}
export const fetchboardDelete=(no,pwd)=>dispatch=>{
    axios.post('http://localhost/board/delete_redux',null,{
        params:{
            no:no,
            pwd:pwd
        }
    }).then(response=>{
        const action={
            type:FETCH_BOARD_DELETE,
            payload:response.data
        }
        dispatch(action)
    })
}
export const fetchboardUpdateData=(no)=>dispatch=>{
    axios.get('http://localhost/board/update_redux',{
        params:{
            no:no
        }
    }).then(response=>{
        const action={
            type:FETCH_BOARD_UPDATE_DATA,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchboardUpdateOk=(updateData)=>dispatch=>{
    axios.post('http://localhost/board/update_ok_redux',null,{
        params:updateData
    }).then(response=>{
        const action={
            type:FETCH_BOARD_UPDATE,
            payload:response.data
        }
        dispatch(action)
    })
}