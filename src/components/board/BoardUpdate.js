import {Fragment, useState, useEffect, useRef} from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchboardUpdateData, fetchboardUpdateOk} from "../../actions/boardActions";

function BoardUpdate(){
    const {no}=useParams()
    const nav=useNavigate()
    const [name,setName]=useState('')
    const [subject,setSubject]=useState('')
    const [content,setContent]=useState('')
    const [pwd,setPwd]=useState('')
    const nameRef=useRef(null)
    const subjectRef=useRef(null)
    const contentRef=useRef(null)
    const pwdRef=useRef(null)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchboardUpdateData(no))
    },[])

    const update_date=useSelector((state)=>state.boards.update_data)
    useEffect(()=>{
        setName(update_date.name)
        setContent(update_date.content)
        setSubject(update_date.subject)
    },[update_date])

    useEffect(() => {
        dispatch(fetchboardUpdateOk({
            name:name,
            subject:subject,
            content:content,
            pwd:pwd,
            no:no
        }))
    }, [pwd]);

    const upResult=useSelector((state)=>state.boards.result)
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
    const update=()=>{
        if(name.trim()==="")
        {
            nameRef.current.focus()
            return
        }
        if(subject.trim()==="")
        {
            subjectRef.current.focus()
            return
        }
        if(content.trim()==="")
        {
            contentRef.current.focus()
            return
        }
        if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }

        if(upResult==="yes")
        {
            window.location.href="/board/detail/"+no
        }
        else if(upResult==="no")
        {
            alert("비밀번호가 틀립니다!!")
            pwdRef.current.value=''
            pwdRef.current.focus()

        }

    }
    return (
        <div className="bgded overlay light">
            <section id="services" className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading font-x2" style={{"color": "black"}}>게시글 수정</h6>
                </div>

                <table style={{"width": "1000px"}}>
                    <tbody>
                    <tr>
                        <td width={"15%"} id={"boardno"}
                            style={{"color": "black", "backgroundColor": "rgb(245, 232, 221)", "fontWeight": "bold"}}>이름
                        </td>
                        <td width={"85%"} style={{"borderBottomWidth": "thin"}}>
                            <input type={"text"} size={"20"} className={"input-sm"} style={{"color": "gray"}}
                                   onChange={nameChange} value={name} ref={nameRef}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td width={"15%"} id={"boardno"}
                            style={{"color": "black", "backgroundColor": "rgb(245, 232, 221)", "fontWeight": "bold"}}>제목
                        </td>
                        <td width={"85%"} style={{"borderBottomWidth": "thin"}}>
                            <input type={"text"} size={"50"} className={"input-sm"} style={{"color": "gray"}}
                                   onChange={subjectChange} value={subject} ref={subjectRef}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td width={"15%"} id={"boardno"}
                            style={{"color": "black", "backgroundColor": "rgb(245, 232, 221)", "fontWeight": "bold"}}>내용
                        </td>
                        <td width={"85%"} style={{"borderBottomWidth": "thin"}}>
                        <textarea rows={"10"} cols={"100"} onChange={contentChange} style={{"color": "gray"}}
                                  ref={contentRef} value={content}>{content}</textarea>
                        </td>
                    </tr>
                    <tr>
                        <td width={"15%"} id={"boardno"} style={{
                            "color": "black",
                            "backgroundColor": "rgb(245, 232, 221)",
                            "fontWeight": "bold"
                        }}>비밀번호
                        </td>
                        <td width={"85%"} style={{"borderBottomWidth": "thin"}}>
                            <input type={"password"} size={"15"} className={"input-sm"} style={{"color": "black"}}
                                   onChange={pwdChange} ref={pwdRef} value={pwd}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button className={"btn"} id={"boardbutton"} style={{"marginLeft":"40%","float":"left"}} onClick={update}>수정</button>
                <button className={"btn"} id={"boardbutton"} style={{"marginLeft":"2%"}} onClick={() => nav(-1)}>취소</button>
            </section>
        </div>
    )
}

export default BoardUpdate