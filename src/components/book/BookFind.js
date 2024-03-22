import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchBookFind} from "../../actions/bookActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

export const BookFind=()=>{
    const [name,setName]=useState("웹")
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchBookFind(curpage,name))
    },[name,curpage]) // 재호출

    const findList=useSelector((state)=> state.books.find_list.find_list)
    const totalpage=useSelector((state)=>state.books.find_list.totalpage)
    const findChange=(e)=>{
        setName(e.target.value)
    }
    const pageChange=(page)=>{
        setCurpage(page)
    }
    return (
        <div className="bgded overlay light">
            <section id="services" className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading font-x2">도서 검색</h6>
                </div>
                <div style={{"marginBottom":"3%"}}>
                    <input type={"text"} className={"input-sm"}
                           onChange={findChange} value={name} style={{"color":"black","float":"left","marginRight":"1%","width":"300px","height":"40px"}}/>
                    <button style={{"height":"40px","width":"60px","color":"black","backgroundColor":"rgb(245, 232, 221)","borderWidth":"1px"}}>검색</button>
                </div>
                {findList &&
                    findList.map((book) =>
                        <table>
                            <tbody>
                            <tr>
                                <td width={"20%"} rowSpan={"3"} style={{"paddingLeft": "5%"}}>
                                    <Link to={"/book/detail/" + book.no}>
                                        <img src={book.poster} style={{"width": "125px", "height": "186px"}}/>
                                    </Link>
                                </td>
                                <td style={{"height": "60px"}}>
                                    <Link to={"/book/detail/" + book.no}>
                                        <h4 style={{"color": "black", "fontWeight": "bolder"}}>{book.name}</h4>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"color": "black"}}><strong
                                    style={{"fontWeight": "bold"}}>작가&nbsp;&nbsp;&nbsp;</strong><span>{book.author}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"color": "black"}}><strong
                                    style={{"fontWeight": "bold"}}>가격&nbsp;&nbsp;&nbsp;</strong><span>{book.price}</span>
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
                <div style={{"height": "100px"}}></div>
            </section>
        </div>
    )
}