import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchBhomeList} from "../../actions/bookActions";
import {fetchChomeList} from "../../actions/cdlpActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

function Home(){

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchBhomeList())
        dispatch(fetchChomeList())
    }, []);

    const blist=useSelector((state)=>state.books.bList.bList)
    const clist=useSelector((state)=>state.cdlps.cList.cList)
    console.log(blist)
    console.log(clist)
    return(
        <Fragment>
            <div className="bgded overlay" id={"HomeBack"}>
                <div id="pageintro" className="hoc clear">
                    <article>
                    </article>
                </div>
            </div>
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <section id="introblocks">
                        <ul className="nospace group btmspace-80 elements elements-four">
                            {blist &&
                                blist.map((b)=>
                            <li className="one_quarter">
                                <article style={{"width":"248.98px","height":"310px"}}>
                                    <Link to={"/book/detail/"+b.no}>
                                        <img src={b.poster} style={{"width":"150px","height":"200px"}}></img>
                                    </Link>
                                    <h6 className="heading" style={{"color":"black"}}>{b.author}</h6>
                                    <p style={{"color":"black"}}>{b.name}</p>
                                </article>
                            </li>
                            )}
                        </ul>
                    </section>
                    <section className="group shout"></section>
                    <div className="clear"></div>
                </main>
            </div>
            <div className="bgded overlay light" id={"cdback"}>
                <section id="services" className="hoc container clear">
                    <div className="sectiontitle">
                        <h6 className="heading font-x2" style={{"color":"black"}}>추천 음반</h6>
                    </div>
                    <ul className="nospace group elements elements-three">
                        {clist &&
                            clist.map((c)=>
                        <li className="one_third">
                            <article style={{"width":"347.98px","height":"292.95px","borderRadius":"20px"}}>
                                <Link to={"/cdlp/detail/"+c.no}>
                                    <img src={c.poster} style={{"width":"150px","height":"150px"}}></img>
                                </Link>
                                <h6 className="heading">{c.subject}</h6>
                                <p>{c.artist}</p>
                            </article>
                        </li>
                        )}
                    </ul>
                </section>
            </div>
            <div className="wrapper coloured">
                <section id="testimonials" className="hoc container clear">
                    <div className="sectiontitle">
                        <h6 className="heading font-x2" style={{"color":"black"}}>오늘의 작가 소개</h6>
                    </div>
                    <article className="one_half first">
                        <figure className="clear"><img src="https://image.yes24.com/momo/TopCate65/MidCate01/6407574.jpg" style={{"width":"120px","height":"130px"}}/>
                            <figcaption>
                                <h6 className="heading">D. Doe</h6>
                                <em>Adipiscing fusce eu velit</em></figcaption>
                        </figure>
                        <blockquote>1955년 전북 전주에서 태어났고 원광대학교 국문학과를 졸업했다. 1978년에 『다시 시작하는 아침』으로
                            [문학사상] 신인상을 수상하면서 문단에 등장한 후, 창작집 『귀머거리새』와 『원미동 사람들』을 출간, “단편
                            문학의 정수를 보여주고 있다”는 비평가들의 찬사를 받았다. 1990년대 들어서 양귀자는 장편소설에
                            주력했다. 한때 출판계에 퍼져있던 ‘양귀자 3년 주기설’이 말해주듯 『희망』 『나는 소망한다 내게 금지...
                        </blockquote>
                    </article>
                    <article className="one_half">
                        <figure className="clear"><img src="https://image.yes24.com/momo/TopCate2665/MidCate006/266455821.jpg" style={{"width":"120px","height":"130px"}}/>
                            <figcaption>
                                <h6 className="heading">E. Doe</h6>
                                <em>Mauris erat aliquam leo</em></figcaption>
                        </figure>
                        <blockquote>1981년 눈이 많이 내리던 날 서울에서 태어났다. 낮엔 일하고 밤엔 글 쓰다가 2006년 [실천문학]으로
                            등단했다. 소설집 『팽이』, 『겨울방학』, 장편소설 『당신 옆을 스쳐간 그 소녀의 이름은』, 『끝나지 않는 노래』,
                            『나는 왜 죽지 않았는가』, 『구의 증명』, 『해가 지는 곳으로』, 『이제야 언니에게』, 『내가 되는 꿈』, 『팽이』,
                            『겨울방학』 등을 썼다. 앤솔러지 『장래 희망은 함박눈』을 함께 썼다.
                        </blockquote>
                    </article>
                </section>
            </div>
            <a id="backtotop" href="#top"><i className="fas fa-chevron-up"></i></a>
            <script src="layout/scripts/jquery.min.js"></script>
            <script src="layout/scripts/jquery.backtotop.js"></script>
            <script src="layout/scripts/jquery.mobilemenu.js"></script>
            <script src="layout/scripts/jquery.easypiechart.min.js"></script>
        </Fragment>
    )
}

export default Home