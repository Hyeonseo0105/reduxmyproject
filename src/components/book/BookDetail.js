import {Fragment, useEffect, useRef, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchBookcartOk, fetchBookDetail} from "../../actions/bookActions";
import {Link, useNavigate, useParams} from "react-router-dom";
export const BookDetail=()=> {
    const {no} = useParams()
    // getParameter
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [cartnum,setCartnum]=useState('')

    useEffect(() => {
        dispatch(fetchBookDetail(no))
    }, [])

    const cartok=()=>{
        const params={
            cart:cartnum,
            no:no
        }
        dispatch(fetchBookcartOk(params))
    }
    const cart_data=useSelector((state)=>state.books.cart_num)
    console.log(cart_data)

    useEffect(() => {
        setCartnum(cart_data.cart)
    }, []);

    const bookDetail = useSelector((state) => state.books.book_detail)
    console.log(bookDetail)

    return (
        <>
            <div className="bgded overlay light">
                <section id="services" className="hoc container clear">
                    <div className="sectiontitle">
                        <h6 className="heading font-x2" style={{"color": "black"}}>상세정보</h6>
                    </div>
                    <table id={"detailbook"}>
                        <tbody>
                        <tr>
                            <td rowSpan={"6"}>
                                <img src={bookDetail.poster} style={{"marginLeft": "20%"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{"fontSize": "x-large", "fontWeight": "bold"}}>{bookDetail.name}</td>
                        </tr>
                        <tr>
                            <td>{bookDetail.author}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{bookDetail.regdate}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{bookDetail.publ}</td>
                        </tr>
                        <tr>
                            <td>★★★★★&nbsp;&nbsp;{bookDetail.score}</td>
                        </tr>
                        <tr>
                            <td><a style={{
                                "fontWeight": "bold",
                                "color": "black"
                            }}>정가</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{bookDetail.price}</td>
                        </tr>
                        <tr>
                            <td><a style={{
                                "fontWeight": "bold",
                                "color": "black"
                                }}>판매가</a>&nbsp;&nbsp;&nbsp;&nbsp;{bookDetail.saleprice}
                            </td>
                            <td>
                                <Link to={"/cart/list"} onClick={cartok} className={"btn"} style={{"backgroundColor":"rgb(245,232,221)","color":"black"}}>구매</Link>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                    <table id={"detailinfo"}>
                        <tbody>
                        <tr>
                            <td style={{
                                "fontWeight": "bold",
                                "paddingLeft": "47%",
                                "paddingTop": "2%",
                                "paddingBottom": "3%",
                                "color": "black",
                                "fontSize": "x-large"
                            }}>상세이미지
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={bookDetail.detailposter}
                                     style={{"width": "50%", "height": "50%", "marginLeft": "25%", "border": "thin"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{
                                "fontWeight": "bold",
                                "paddingLeft": "47%",
                                "paddingTop": "2%",
                                "paddingBottom": "3%",
                                "color": "black",
                                "fontSize": "x-large"
                            }}>저자소개
                            </td>
                        </tr>
                        <tr>
                            <td style={{"color": "black","paddingBottom":"30px"}}>&nbsp;&nbsp;&nbsp;{bookDetail.intro}</td>
                        </tr>
                        </tbody>
                    </table>
                    <button id={"detailbutton"} onClick={() => nav(-1)}>목록
                    </button>

                    <div style={{"height": "10px"}}></div>
                </section>
            </div>
        </>
    )
}