import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchCartList} from "../../actions/bookActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

export const BookCartList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchCartList(curpage))
    },[curpage])

    const cartList=useSelector((state)=>state.books.cart_list.cart_list)
    const totalpage=useSelector((state)=>state.books.cart_list.totalpage)

    console.log(cartList)
    console.log(totalpage)

    const pageChange=(page)=>{
        setCurpage(page)
    }

    return (
        <div className="bgded overlay light" style={{"backgroundColor":"white"}}>
            <section id="services" className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading font-x2" style={{"color": "black"}}>장바구니</h6>
                </div>
                {cartList &&
                    cartList.map((cart) =>
                        <table style={{"marginBottom":"50px","width":"900px","marginLeft":"11%","color":"black"}}>
                            <tbody>
                            <tr>
                                <td width={"20%"} rowSpan={"4"}>
                                    <img src={cart.poster} style={{"width": "125px", "height": "186px","paddingLeft": "7%", "borderRightStyle": "hidden"}}></img>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"height": "60px"}}>
                                    <Link to={"/book/detail/" + cart.no} style={{"color":"black"}}>
                                        <strong style={{"fontWeight": "bold","fontSize": "x-large","color": "black"}}>{cart.name}</strong>
                                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{cart.author}
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"color": "black"}}><strong
                                    style={{"fontWeight": "bold"}}>수량&nbsp;&nbsp;&nbsp;</strong><span>{cart.cart}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"color": "black"}}><strong
                                    style={{"fontWeight": "bold"}}>총 가격&nbsp;&nbsp;&nbsp;</strong><span>{cart.saleprice}</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    )
                }
                <div className={"text-center"}>
                    <Pagination
                        activePage={curpage}
                        itemsCountPerPage={20}
                        totalItemsCount={totalpage}
                        pageRangeDisplayed={10}
                        prevPageText={"<"}
                        nextPageText={">"}
                        onChange={pageChange}
                        style={{"width": "100%"}}
                    />
                </div>
            </section>
        </div>
    )
}