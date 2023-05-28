import { ReactNode, useEffect, useRef } from "react";

interface IModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
}

export default function Modal({
  showModal,
  setShowModal,
  children,
  className,
  ...props
}: IModal) {
  const modalRef = useRef<any>(null);

  useEffect(() => {
    const { current } = modalRef;
    if (showModal) {
      current?.showModal();
    } else {
      current?.close();
    }
  }, [showModal]);

  useEffect(() => {
    const { current } = modalRef;

    const handleCancel = (event: InputEvent) => {
      event.preventDefault();
      setShowModal(false);
    };
    current?.addEventListener("cancel", handleCancel);

    () => {
      current?.removeEventListener("cancel", handleCancel);
    };
  }, [showModal]);

  return (
    <dialog className={className} ref={modalRef} {...props}>
      {children}
    </dialog>
  );
}
