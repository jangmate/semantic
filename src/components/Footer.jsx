import {Link} from "react-router-dom";

export default function Footer () {
    return (
        <footer>
            <div className='container flex-center'>
                <section className='info'>
                    <Link to="/" className="footer-logo">
                        <img src="./images/logo-footer.svg" alt="WAYBLE circular"/>
                    </Link>
                    <nav>
                        <a href='#'>이용약관</a>
                        <strong><a href='#'>개인정보처리방침</a></strong>
                    </nav>
                    <div className='wrap-address'>
                        <address>서울특별시 종로구 율곡로2길 19, SK에코플랜트</address>
                        <p className='tel'>TEL : 02-3700-9156 ~ 8</p>
                    </div>
                    <p className='copyright'>COPYRIGHT(C) 2024 SK ecoplant CO.,LTD. ALL RIGHTS RESERVED.</p>
                </section>
                <section className='relation'>
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
                        </ul>
                        <a href='#' className='link-ces'>CES 2023 스마트시티 분야<br/> 혁신상(Innovation Awards) 수상</a>
                    </nav>
                </section>
            </div>
        </footer>
    )
}