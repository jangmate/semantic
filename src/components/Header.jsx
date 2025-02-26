import {Link} from "react-router-dom";

export default function Header () {
    return (
        <header>
            <h1 className='h1'>
                <Link to="/">로고입니다</Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/intro">서비스 소개</Link>
                    </li>
                    <li>
                        <Link to="/epr">EPR 관리</Link>
                    </li>
                    <li>
                        <Link to="/news">NEWS</Link>
                    </li>
                    <li>
                        <Link to="/contact">상담문의</Link>
                    </li>
                    <li>
                        <Link to="/support">고객지원</Link>
                    </li>
                </ul>
            </nav>
            <aside className='aside'>
                <ul>
                    <li>
                        <Link to="/" className='to_home btn_normal'>WAYBLE</Link>
                    </li>
                    <li>
                        <button type='button' className='login btn_normal'>로그인</button>
                    </li>
                    <li>
                        <button type='button' className='hamburger'>더보기</button>
                    </li>
                </ul>
            </aside>
        </header>
    )
}