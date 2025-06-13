import {Link} from "react-router-dom";

export default function Footer () {
    return (
        <footer>
            <div className='container flex-center'>
                <div className='info'>
                    <Link to="/" className="footer-logo">
                        <img src="./images/logo-footer.svg" alt="WAYBLE circular"/>
                    </Link>
                    <nav className={'terms-nav'}>
                        <ul>
                            <li><a href='#'>이용약관</a></li>
                            <li><strong><a href='#'>개인정보처리방침</a></strong></li>
                        </ul>
                    </nav>
                    <address>서울특별시 종로구 율곡로2길 19, SK에코플랜트 TEL : 02-3700-9156 ~ 8</address>
                    <p className='copyright'>COPYRIGHT(C) 2024 SK ecoplant CO.,LTD. ALL RIGHTS RESERVED.</p>
                </div>
                <div className='relation'>
                    <nav>
                        <ul>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}>{/*블로그*/}</a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}>{/*인스타*/}</a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}>{/*카카오톡*/}</a>
                            </li>
                            <li>
                                <select>
                                    <option>FAMILY SITE</option>
                                </select>
                            </li>
                            <li><a href='#' className='ces'>CES 2023 스마트시티 분야<br/> 혁신상(Innovation Awards) 수상</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}