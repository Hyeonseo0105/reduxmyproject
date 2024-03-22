import {Fragment,useState,useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchBoardDetail} from "../../actions/boardActions";

function BoardDetail(){
    const {no}=useParams()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchBoardDetail(no))
    },[])


    const detail=useSelector((state)=>state.boards.board_detail)
    return (
        detail &&
        <div className="bgded overlay light">
            <section id="services" className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading font-x2" style={{"color":"black"}}>상세보기</h6>
                </div>
            <h3 className={"text-center"}></h3>
            <table style={{"color":"black"}}>
                <tbody>
                <tr>
                    <td width={"10%"} style={{"backgroundColor":"rgb(245, 232, 221)"}}>제목</td>
                    <td colSpan={"5"}>{detail.subject}</td>
                </tr>
                <tr>
                    <td width={"10%"} style={{"borderTopWidth":"thin","backgroundColor":"rgb(245, 232, 221)"}}>작성자</td>
                    <td width={"23.33%"} style={{"borderTopWidth":"thin"}}>{detail.name}</td>
                    <td width={"10%"} style={{"borderTopWidth":"thin","backgroundColor":"rgb(245, 232, 221)"}}>작성일</td>
                    <td width={"23.33%"} style={{"borderTopWidth":"thin"}}>{detail.regdate}</td>
                    <td width={"10%"} style={{"borderTopWidth":"thin","backgroundColor":"rgb(245, 232, 221)"}}>조회수</td>
                    <td width={"23.33%"} style={{"borderTopWidth":"thin"}}>{detail.hit}</td>
                </tr>
                <tr>
                    <td height={"200"} colSpan={"6"} valign={"top"} style={{"borderTopWidth":"thin"}}>
                        <pre style={{
                            "whiteSpace": "pre-wrap",
                            "backgroundColor": "white",
                            "border": "none",
                            "paddingTop":"3%"
                        }}>{detail.content}</pre>
                    </td>
                </tr>
                </tbody>
            </table>
            <Link to={"/board/list"} className={"btn"} id={"boardbutton"} style={{"marginLeft":"44%"}}>목록</Link>
            <Link to={"/board/update/" + no} className={"btn"} id={"boardbutton"} style={{"marginLeft":"37.6%"}}>수정</Link>
            <Link to={"/board/delete/" + no} className={"btn"} id={"boardbutton"} style={{"marginLeft":"1%"}}>삭제</Link>


            </section>
        </div>
    )
}

export default BoardDetail