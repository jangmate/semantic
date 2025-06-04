import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import LoginModal from "./LoginModal.jsx";

export default function Header () {
    const modalRef = useRef(null);
    const [headerOpen, setHeaderOpen] = useState(false);
    const openModal = () => {
        modalRef.current?.showModal();
    };
    return (
        <header className={headerOpen ? 'open' : ''}>
            <h1 className='h1'>
                <Link to="/" aria-label='WAYBLE circlar' className='wayble_logo'></Link>
            </h1>
            <nav>
                <ul onMouseEnter={() => setHeaderOpen(true)} onMouseLeave={() => setHeaderOpen(false)}>
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
                    {/*<li>*/}
                    {/*    <button type="button" onClick={() => navigate("/")}>WAYBLE</button>*/}
                    {/*</li>*/}
                    <li>
                       <button type='button' onClick={openModal}>로그인</button>
                    </li>
                </ul>
            </aside>
            <LoginModal ref={modalRef}>
            </LoginModal>
        </header>
    )
}