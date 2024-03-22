import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchNovelList} from "../../actions/bookActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

export const NovelList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchNovelList(curpage))
    },[curpage])

    const novelList=useSelector((state)=>state.books.novel_list.novel_list)
    const totalpage=useSelector((state)=>state.books.novel_list.totalpage)
    console.log(novelList)
    console.log(totalpage)

    const pageChange=(page)=>{
        setCurpage(page)
    }

    return (
        <div className="bgded overlay light" style={{"backgroundColor": "white"}}>
            <section id="services" className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs" style={{"color": "black"}}>소설</p>
                    <h6 className="heading font-x2" style={{"color": "black"}}>베스트 셀러</h6>
                </div>
                {novelList &&
                    novelList.map((book) =>
                        <table style={{"marginBottom":"50px","width":"900px","marginLeft":"11%"}}>
                            <tbody>
                            <tr>
                                <td width={"20%"} rowSpan={"3"} style={{"paddingLeft": "3%","borderRightStyle":"hidden"}}>
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