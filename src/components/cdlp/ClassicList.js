import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchclassicList} from "../../actions/cdlpActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

export const ClassicList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchclassicList(curpage))
    },[curpage])

    const classicList=useSelector((state)=>state.cdlps.classic_list.classic_list)
    const totalpage=useSelector((state)=>state.cdlps.classic_list.totalpage)
    console.log(classicList)
    console.log(totalpage)

    const handleChange=(page)=>{
        setCurpage(page)
    }

    return (
        <div className="bgded overlay light">
            <section id="services" className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading font-x2" style={{"color":"black"}}>클래식</h6>
                </div>
                <ul className="nospace group elements elements-three">
                    {classicList &&
                        classicList.map((cl) =>
                            <li className="one_third">
                                <article style={{"height":"595.64px","width":"347.98px"}}><a href="#">
                                    <img src={cl.poster}></img>
                                </a>
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
                    onChange={handleChange}
                    style={{"width": "100%"}}
                />
            </div>
            <div style={{"height":"100px"}}></div>
        </div>
    )
}