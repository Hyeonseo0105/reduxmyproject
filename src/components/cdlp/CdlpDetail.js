import {Fragment,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchcdlpDetail} from "../../actions/cdlpActions";
import {useNavigate,useParams} from "react-router-dom";

export const CdlpDetail=()=>{
    const {no} = useParams()
    // getParameter
    const nav = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchcdlpDetail(no))
    }, [])

    const clDetail = useSelector((state) => state.cdlps.cdlp_detail)
    console.log(clDetail)

    return (
        <>
            <div className="bgded overlay light">
                <section id="services" className="hoc container clear">
                    <div className="sectiontitle">
                        <h6 className="heading font-x2" style={{"color": "black"}}>상세정보</h6>
                    </div>
                    <table id={"detailbook"}>
                        <tbody>
                        <tr>
                            <td rowSpan={"6"}>
                                <img src={clDetail.poster}
                                     style={{"marginLeft": "7%", "width": "400px", "height": "400px"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{"fontSize": "x-large", "fontWeight": "bold"}}>{clDetail.subject}</td>
                        </tr>
                        <tr>
                            <td>{clDetail.artist}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{clDetail.publisher}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{clDetail.regdate}</td>
                        </tr>
                        <tr>
                            <td>★★★★★&nbsp;&nbsp;10.0</td>
                        </tr>
                        <tr>
                            <td><a style={{
                                "fontWeight": "bold",
                                "color": "black"
                            }}>정가</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{clDetail.price}</td>
                        </tr>
                        <tr>
                            <td>
                                <a style={{"fontWeight": "bold", "color": "black"}}>판매가</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;{clDetail.saleprice} ({clDetail.discount}%할인)
                            </td>
                        </tr>

                        </tbody>
                    </table>
                    <table id={"detailinfo"}>
                        <tbody>
                        <tr>
                            <td style={{
                                "fontWeight": "bold",
                                "paddingLeft": "47%",
                                "paddingTop": "2%",
                                "paddingBottom": "3%",
                                "color": "black",
                                "fontSize": "x-large"
                            }}>상세이미지
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={clDetail.image}
                                     style={{"width": "50%", "height": "50%", "marginLeft": "25%", "border": "thin"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{
                                "fontWeight": "bold",
                                "paddingLeft": "47%",
                                "paddingTop": "2%",
                                "paddingBottom": "3%",
                                "color": "black",
                                "fontSize": "x-large"
                            }}>음반소개
                            </td>
                        </tr>
                        <tr>
                            <td style={{
                                "color": "black",
                                "paddingBottom": "30px"
                            }}>&nbsp;&nbsp;&nbsp;{clDetail.content}</td>
                        </tr>
                        </tbody>
                    </table>
                    <button id={"detailbutton"} onClick={() => nav(-1)}>목록
                    </button>

                    <div style={{"height": "10px"}}></div>
                </section>
            </div>
        </>
    )
}