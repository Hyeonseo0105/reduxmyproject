import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchcdlpList} from "../../actions/cdlpActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

export const CdlpList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchcdlpList(curpage))
    },[curpage])

    const cdlpList=useSelector((state)=>state.cdlps.cdlp_list.cdlp_list)
    const totalpage=useSelector((state)=>state.cdlps.cdlp_list.totalpage)
    console.log(cdlpList)
    console.log(totalpage)

    const pageChange=(page)=>{
        setCurpage(page)
    }

    return (
        <div className="bgded overlay light">
            <section id="services" className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading font-x2" style={{"color":"black"}}>가요</h6>
                </div>
                <ul className="nospace group elements elements-three">
                    {cdlpList &&
                        cdlpList.map((cl) =>
                            <li className="one_third">
                                <article><Link to={"/cdlp/detail/"+cl.no}>
                                    <img src={cl.poster}></img>
                                </Link>
                                    <h4 className="heading">{cl.subject}</h4>
                                    <h6>{cl.saleprice}원 ({cl.discount}% 할인)</h6>
                                    <p>{cl.artist}</p>
                                </article>
                            </li>
                        )
                    }

                </ul>
            </section>
            <div className={"text-center"}>
                <Pagination
                    activePage={curpage}
                    itemsCountPerPage={12}
                    totalItemsCount={totalpage}
                    pageRangeDisplayed={10}
                    prevPageText={"<"}
                    nextPageText={">"}
                    onChange={pageChange}
                    style={{"width": "100%"}}
                />
            </div>
            <div style={{"height":"100px"}}></div>
        </div>
    )
}