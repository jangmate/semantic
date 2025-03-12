import {Link} from "react-router-dom";
import LoginModal from "./LoginModal.jsx";

export default function Header () {
    return (
        <header>
            <h1 className='h1'>
                <Link to="/" aria-label='WAYBLE circlar' className='wayble_logo'></Link>
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
                <button type='button' className='login btn_normal'>로그인</button>
            </aside>
            <LoginModal />
        </header>
    )
}