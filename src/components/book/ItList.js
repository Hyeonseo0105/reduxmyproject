import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchItList} from "../../actions/bookActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

export const ItList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchItList(curpage))
    },[curpage])

    const itList=useSelector((state)=> state.books.it_list.it_list)
    const totalpage=useSelector((state)=>state.books.it_list.totalpage)
    console.log(itList)
    console.log(totalpage)

    const pageChange=(page)=>{
        setCurpage(page)
    }

    return (
        <div className="bgded overlay light">
            <section id="services" className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs" style={{"color":"black"}}>IT 모바일</p>
                    <h6 className="heading font-x2" style={{"color":"black"}}>베스트 셀러</h6>
                </div>
                {itList &&
                    itList.map((it) =>
                        <table style={{"marginBottom":"50px","width":"900px","marginLeft":"11%"}}>
                            <tbody>
                            <tr>
                                <td width={"20%"} rowSpan={"3"} style={{"paddingLeft": "3%","borderRightStyle":"hidden"}}>
                                    <img src={it.poster} style={{"width": "125px","height": "186px"}}/>
                                </td>
                                <td style={{"color":"black"}}><strong style={{"fontWeight": "bold"}}>{it.name}</strong><span></span></td>
                            </tr>
                            <tr>
                                <td style={{"color":"black"}}><strong style={{"fontWeight": "bold"}}>작가&nbsp;&nbsp;&nbsp;</strong><span>{it.author}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"color":"black"}}><strong style={{"fontWeight": "bold"}}>가격&nbsp;&nbsp;&nbsp;</strong><span>{it.price}</span></td>
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