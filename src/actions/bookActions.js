import {FETCH_BOOK_LIST,FETCH_NOVEL_LIST,FETCH_IT_LIST,FETCH_NEW_LIST,
    FETCH_BOOK_DETAIL,FETCH_BOOK_FIND,
    FETCH_BHOME_LIST,FETCH_BOOK_CART_DATA,FETCH_CART_LIST} from "./types";
import axios from "axios";

export const fetchBhomeList=()=>dispatch=>{
    axios.get('http://localhost/')
        .then((response=>{
            const action={
                type:FETCH_BHOME_LIST,
                payload:response.data
            }
            dispatch(action)
        }))
}
export const fetchBookList=(page)=>dispatch=>{
    axios.get('http://localhost/book/list_redux',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_BOOK_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchNovelList=(page)=>dispatch=>{
    axios.get('http://localhost/book/novel_list_redux',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_NOVEL_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchItList=(page)=>dispatch=>{
    axios.get('http://localhost/book/it_list_redux',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_IT_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchNewList=(page)=>dispatch=>{
    axios.get('http://localhost/book/new_list_redux',{
        params:{
            page:page
        }
    }).then((response=>{
        const action={
            type:FETCH_NEW_LIST,
            payload:response.data
        }
        dispatch(action)
    }))
}

export const fetchBookDetail=(no)=>dispatch=>{
    axios.get('http://localhost/book/detail_redux',{
        params:{
            no:no
        }
    }).then(response=>{
            const action={
                type:FETCH_BOOK_DETAIL,
                payload:response.data
            }
            dispatch(action)
        })

}

export const fetchBookFind=(page,name)=>dispatch=>{
    axios.get('http://localhost/book/find_redux',{
        params:{
            page:page,
            name:name
        }
    }).then(response=>{
        const action={
            type:FETCH_BOOK_FIND,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchBookcartOk=(cartData)=>dispatch=>{
    axios.post('http://localhost/book/cart_ok_redux',null,{
        params:cartData
    }).then(response=>{
        const action={
            type:FETCH_BOOK_CART_DATA,
            payload:response.data
        }
        dispatch(action)
    })
}
export const fetchCartList=(page)=>dispatch=>{
    axios.get('http://localhost/cart/list_redux',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_CART_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}