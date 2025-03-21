import { forwardRef } from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line react/display-name,react/prop-types
const Modal = forwardRef(({ children }, ref) => {
    return ReactDOM.createPortal(
        <dialog ref={ref} className="modal-login">
            <div className="modal-login-content">
                {children}
                <button onClick={() => ref.current.close()}>닫기</button>
            </div>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default Modal;