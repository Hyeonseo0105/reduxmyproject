import {Link} from "react-router-dom";

function Header(){
    return (
        <div className="wrapper row1" style={{"backgroundColor":"rgba(245, 232, 221,1)"}}>
            <header id="header" className="hoc clear">
                <div id="logo" className="fl_left">
                    <h1 className="logoname"><Link to={"/"}>Book&nbsp;&<span>C</span>D/LP</Link></h1>
                </div>
                <nav id="mainav" className="fl_right">
                    <ul className="clear">
                        <li><Link to="/">Home</Link></li>
                        <li><Link className="drop" to="/book/list">Book</Link>
                            <ul>
                                <li><Link className="drop" to="/book/list">베스트셀러</Link>
                                    <ul>
                                        <li><Link to="/book/list">종합</Link></li>
                                        <li><Link to="/novel/list">소설</Link></li>
                                        <li><Link to="/it/list">IT 모바일</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/new/list">신상품</Link></li>
                            </ul>
                        </li>

                        <li><Link className="drop" to="/cdlp/list">CD/LP</Link>
                            <ul>
                                <li><Link to={"/cdlp/list"}>가요</Link></li>
                                <li><Link to={"/classic/list"}>클래식</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/book/find">검색</Link></li>
                        <li><Link to="/board/list">커뮤니티</Link></li>
                        <li><Link to="/cart/list">장바구니</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header