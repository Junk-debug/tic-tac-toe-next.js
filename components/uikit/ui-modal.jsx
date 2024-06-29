import clsx from "clsx";
import { createPortal } from "react-dom";

const CrossLightIcon = ({ className }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.99809 5.99999L11.793 1.20507C12.069 0.929082 12.069 0.482986 11.793 0.206994C11.517 -0.068998 11.0709 -0.068998 10.7949 0.206994L6.00001 5.00191L1.20507 0.206994C0.929082 -0.068998 0.482986 -0.068998 0.206994 0.206994C-0.068998 0.482986 -0.068998 0.929082 0.206994 1.20507L5.00191 5.99999L0.206994 10.7949C-0.068998 11.0709 -0.068998 11.517 0.206994 11.793C0.344638 11.9306 0.525336 11.9998 0.706034 11.9998C0.886732 11.9998 1.06743 11.9306 1.20507 11.793L5.99999 6.99807L10.7949 11.793C10.9325 11.9306 11.1132 11.9998 11.2939 11.9998C11.4746 11.9998 11.6553 11.9306 11.793 11.793C12.069 11.517 12.069 11.0709 11.793 10.7949L6.99809 5.99999Z"
      fill="currentColor"
    />
  </svg>
);

const CloseButton = ({ className, onClick }) => (
  <button
    onClick={onClick}
    className={clsx(
      "w-8 h-8 rounded flex items-center justify-center bg-white/10 hover:bg-white/30 transition-colors ",
      className,
    )}
  >
    <CrossLightIcon className="w-4 h-4 text-white" />
  </button>
);
/**
 *
 * @param {{
 * width: 'md' | 'full'
 * className: string
 * isOpen: boolean
 * onClose: () => void
 * children: React.ReactNode
 * }} props
 * @returns
 */

export const UiModal = ({
  isOpen,
  onClose,
  width = "md",
  children,
  className,
}) => {
  const handleClick = (e) => {
    const inModal = e.target.closest("[data-id=modal]");
    if (inModal) {
      return;
    }

    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const modal = (
    <div
      onClick={handleClick}
      className={clsx(
        "fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10 overflow-y-auto",
        className,
      )}
    >
      <div
        data-id="modal"
        className={clsx(
          "bg-white rounded-lg min-h-80 mx-auto relative flex flex-col",
          {
            md: "max-w-[640px] w-full",
            full: "mx-5",
          }[width],
        )}
      >
        <CloseButton
          onClick={handleClick}
          className="absolute top-0 -right-3 translate-x-full"
        />
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modals"));
};

UiModal.Header = function UiModalHeader({ children, className }) {
  return (
    <div className={clsx(className, "px-6 pt-6 pb-4 text-2xl")}>{children}</div>
  );
};

UiModal.Body = function UiModalBody({ children, className }) {
  return <div className={clsx(className, "px-6")}>{children}</div>;
};

UiModal.Footer = function UiModalFooter({ children, className }) {
  return (
    <div className={clsx(className, "mt-auto p-6 flex gap-4 justify-end")}>
      {children}
    </div>
  );
};
