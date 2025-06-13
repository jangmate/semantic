import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

import LoginModal from "./LoginModal.jsx";

export default function Header () {
    const modalRef = useRef(null);
    const [headerOpen, setHeaderOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const openModal = () => {
        modalRef.current?.showModal();
    };
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // 초기 체크
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${headerOpen ? 'open' : ''} ${isScrolled ? 'active' : ''}`}>
            <h1 className='h1'>
                <Link to="/" aria-label='WAYBLE circlar' className='wayble_logo'></Link>
            </h1>
            <nav className={'gnb'}>
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
            <div className={'util'}>
                <ul>
                    {/*<li>*/}
                    {/*    <button type="button" onClick={() => navigate("/")}>WAYBLE</button>*/}
                    {/*</li>*/}
                    <li>
                       <button type='button' className={'btn-primary login'} onClick={openModal}>로그인<span className={'icon-arrow'}></span></button>
                    </li>
                </ul>
            </div>
            <LoginModal ref={modalRef} />
        </header>
    )
}