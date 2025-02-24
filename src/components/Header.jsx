import {Link} from "react-router-dom";

export default function Header () {
    return (
        <header>
            <h1>
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
        </header>
    )
}