import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/display-name
const LoginModal = forwardRef((props, ref) => {
    const dialogRef = useRef();
    const [state, setState] = useState("hidden"); // "hidden" | "entering" | "visible" | "leaving"

    useImperativeHandle(ref, () => ({
        showModal: () => {
            if (dialogRef.current.open) return; // 이미 열려 있으면 무시
            setState("entering");
            dialogRef.current.showModal();
            requestAnimationFrame(() => setState("visible"));
        },
        close: () => {
            setState("leaving");
            setTimeout(() => {
                dialogRef.current.close();
                setState("hidden");
            }, 400); // transition 시간
        }
    }));

    return ReactDOM.createPortal(
        <dialog
            ref={dialogRef}
            className={`login-modal ${
                state === "entering" ? "entering" :
                    state === "visible" ? "show" :
                        state === "leaving" ? "hide" : ""
            }`}
        >
            <Link to="/" className="logo-sidemenu"><span className={'blind'}>웨이블</span></Link>
            <form method="POST" className={`login-form`}>
                <input type="email" className={'email-input'} name="email" placeholder="이메일 주소" required />
                <input type="password" className={'password-input'} name="password" placeholder="비밀번호" required />
                <div className={'remember-wrap'}>
                    <input type="checkbox" id="remember" name="remember" className={'remember-checkbox'} />
                    <label htmlFor="remember" className={'remember-label'}>아이디 저장</label>
                </div>
                <button type="submit" value="로그인" className="login-button">로그인</button>
            </form>
            <button onClick={() => ref.current?.close()} className="close-button"><span className={'blind'}>닫기</span></button>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default LoginModal;