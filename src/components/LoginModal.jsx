import { forwardRef } from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/display-name
const LoginModal = forwardRef((props, ref) => {
    return ReactDOM.createPortal(
        // eslint-disable-next-line react/no-unknown-property
        <dialog ref={ref} className="login-modal" closedby={'any'}>
            <Link to="/" className='logo-sidemenu'>웨이블</Link>
            <form action="" method="POST">
                <input type="email" id="email" name="email" placeholder="이메일 주소" required/>
                <input type="password" id="password" name="password" placeholder="비밀번호" required/>
                <div>
                    <input type="checkbox" id="remember" name="remember"/><label htmlFor="remember">아이디 저장</label>
                </div>
                <input type="submit" value="로그인" className={'login-button'}/>
            </form>
            <button onClick={() => ref.current.close()} className='close'>닫기</button>
        </dialog>,
        document.getElementById("modal-root")
    );
});
export default LoginModal;