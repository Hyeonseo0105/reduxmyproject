import {Fragment,useEffect,useState,useRef} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchboardInsert} from "../../actions/boardActions";

function BoardInsert(){
    const nav=useNavigate()
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [subject,setSubject]=useState('')
    const [content,setContent]=useState('')
    const [pwd,setPwd]=useState('')
    const nameRef=useRef(null)
    const subjectRef=useRef(null)
    const contentRef=useRef(null)
    const pwdRef=useRef(null)

    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }
    const insert=()=>{
        if(name.trim()==='')
        {
            nameRef.current.focus()
            return
        }
        if(subject.trim()==='')
        {
            subjectRef.current.focus()
            return
        }
        if(content.trim()==='')
        {
            contentRef.current.focus()
            return
        }
        if(pwd.trim()==='')
        {
            pwdRef.current.focus()
            return
        }

        const params={
            name:name,
            subject:subject,
            content:content,
            pwd:pwd
        }

        dispatch(fetchboardInsert(params))
    }
    const result=useSelector((state)=>state.boards.result)
    if(result&& result==='yes')
    {
        window.location.href="/board/list"
    }
    else if(result && result==='no')
    {
        alert('게시판 추가에 실패하셨습니다')
    }
    return (
        <Fragment>
            <div className="bgded overlay light">
                <section id="services" className="hoc container clear">
                    <div className="sectiontitle">
                        <h6 className="heading font-x2" style={{"color": "black"}}>커뮤니티</h6>
                    </div>

                    <table style={{"width":"1000px"}}>
                        <tbody>
                        <tr>
                            <td width={"15%"} id={"boardno"} style={{"color": "black","backgroundColor":"rgb(245, 232, 221)","fontWeight":"bold"}}>이름</td>
                            <td width={"85%"} style={{"borderBottomWidth":"thin"}}>
                                <input type={"text"} size={"20"} className={"input-sm"} style={{"color":"black"}}
                                       value={name} ref={nameRef} onChange={nameChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td width={"15%"} id={"boardno"} style={{"color": "black","backgroundColor":"rgb(245, 232, 221)","fontWeight":"bold"}}>제목</td>
                            <td width={"85%"} style={{"borderBottomWidth":"thin"}}>
                                <input type={"text"} size={"97"} className={"input-sm"} style={{"color":"black"}}
                                       value={subject} red={subjectRef} onChange={subjectChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td width={"15%"} id={"boardno"} style={{"color": "black","backgroundColor":"rgb(245, 232, 221)","fontWeight":"bold"}}>내용</td>
                            <td width={"85%"} style={{"borderBottomWidth":"thin"}}>
                        <textarea rows={"10"} cols={"100"} style={{"color":"black"}}
                                  value={content} ref={contentRef} onChange={contentChange}
                        ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td width={"15%"} id={"boardno"} style={{"color": "black","backgroundColor":"rgb(245, 232, 221)","fontWeight":"bold"}}>비밀번호</td>
                            <td width={"85%"} style={{"borderBottomWidth":"thin"}}>
                                <input type={"password"} size={"10"} className={"input-sm"} style={{"color":"black"}}
                                       value={pwd} ref={pwdRef} onChange={pwdChange}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button className={"btn"} id={"boardbutton"} style={{"marginLeft":"40%","float":"left"}} onClick={insert}>글쓰기</button>
                    <button className={"btn"} id={"boardbutton"} style={{"marginLeft":"2%"}} onClick={() => nav(-1)}>취소</button>
                </section>
            </div>
        </Fragment>
    )
}

export default BoardInsert