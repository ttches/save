import { useState, useCallback, useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./useModal.module.css";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  const Modal = ({ children }: { children: ReactNode }) => {
    if (!isOpen) return null;

    return createPortal(
      <div className={styles.backdrop} onClick={close}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      document.body
    );
  };

  return { isOpen, open, close, Modal };
};

export default useModal;
