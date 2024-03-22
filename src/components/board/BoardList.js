import {Fragment,useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchboardList} from "../../actions/boardActions";
import Pagination from "react-js-pagination";

export const BoardList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispath=useDispatch()

    useEffect(()=>{
        dispath(fetchboardList(curpage))
    },[curpage])

    const boardList=useSelector((state)=>state.boards.board_list.board_list)
    const totalpage=useSelector((state)=>state.boards.board_list.totalpage)
    console.log(boardList)
    console.log(totalpage)

    const pageChange=(page)=>{
        setCurpage(page)
    }

    return (
        <Fragment>
            <div className="bgded overlay light">
                <section id="services" className="hoc container clear">
                    <div className="sectiontitle">
                        <h6 className="heading font-x2" style={{"color":"black"}}>커뮤니티</h6>
                    </div>
                    <Link to={"/board/insert"} style={{"color":"black"}}>
                        <button style={{"height":"40px","width":"60px","marginBottom":"1%","backgroundColor":"rgb(245, 232, 221)","borderWidth":"1px","borderColor":"#D7D7D7"}}>새글</button>
                    </Link>

                    <table>
                        <thead>
                        <tr className={"danger"}>
                            <th className={"text-center"} width={"10%"}>번호</th>
                            <th className={"text-center"} width={"45%"}>제목</th>
                            <th className={"text-center"} width={"15%"}>이름</th>
                            <th className={"text-center"} width={"20%"}>작성일</th>
                            <th className={"text-center"} width={"10%"}>조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            boardList &&
                            boardList.map((board) =>
                                <tr style={{"color":"black"}}>
                                    <td id={"boardno"} width={"10%"}>{board.no}</td>
                                    <td width={"45%"} style={{"borderBottomWidth":"thin"}}><Link to={"/board/detail/" + board.no} style={{"color":"black"}}>{board.subject}</Link></td>
                                    <td id={"boardno"} width={"15%"}>{board.name}</td>
                                    <td id={"boardno"} width={"20%"}>{board.regdate}</td>
                                    <td id={"boardno"} width={"10%"}>{board.hit}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div style={{"height": "10px"}}></div>
                    <div style={{"marginLeft":"-5%"}}>
                        <Pagination
                            activePage={curpage}
                            itemsCountPerPage={20}
                            totalItemsCount={totalpage}
                            pageRangeDisplayed={10}
                            prevPageText={"<"}
                            nextPageText={">"}
                            onChange={pageChange}
                        />
                    </div>
                </section>
            </div>

        </Fragment>

    )

}