import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchNewList} from "../../actions/bookActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";
export const NewList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchNewList(curpage))
    },[curpage])

    const newList=useSelector((state)=> state.books.new_list.new_list)
    const totalpage=useSelector((state)=>state.books.new_list.totalpage)
    console.log(newList)
    console.log(totalpage)

    const pageChange=(page)=>{
        setCurpage(page)
    }

    return (
        <div className="bgded overlay light">
            <section id="services" className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading font-x2" style={{"color":"black"}}>새로 들어온 도서</h6>
                </div>
                {newList &&
                    newList.map((book) =>
                        <table>
                            <tbody>
                            <tr>
                                <td width={"20%"} rowSpan={"3"} style={{"paddingLeft": "5%"}}>
                                    <Link to={"/book/detail/"+book.no}>
                                        <img src={book.poster} style={{"width": "125px","height": "186px"}}/>
                                    </Link>
                                </td>
                                <td style={{"height":"60px"}}>
                                    <Link to={"/book/detail/" + book.no}>
                                        <strong style={{
                                            "fontWeight": "bold",
                                            "fontSize": "x-large",
                                            "color": "black"
                                        }}>{book.name}</strong>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"color":"black"}}><strong style={{"fontWeight": "bold"}}>작가&nbsp;&nbsp;&nbsp;</strong><span>{book.author}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"color":"black"}}><strong style={{"fontWeight": "bold"}}>가격&nbsp;&nbsp;&nbsp;</strong><span>{book.price}</span></td>
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