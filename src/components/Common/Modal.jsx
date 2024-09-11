import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function Modal({ children, onClose, header }) {
  const divEl = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divEl.current && !divEl.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-100 opacity-60"></div>
      <div
        ref={divEl}
        className="md:w-[35rem] bg-white md:rounded-lg w-full p-6 relative z-10"
      >
        <div className="flex justify-between items-center"> {header}</div>
        <div className="flex flex-col justify-between h-full">{children}</div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}
