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
            <Link to="/" className="logo-sidemenu">웨이블</Link>
            <form method="POST">
                <input type="email" name="email" placeholder="이메일 주소" required />
                <input type="password" name="password" placeholder="비밀번호" required />
                <div>
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">아이디 저장</label>
                </div>
                <input type="submit" value="로그인" className="login-button" />
            </form>
            <button onClick={() => ref.current?.close()} className="close">닫기</button>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default LoginModal;