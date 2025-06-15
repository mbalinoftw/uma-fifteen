import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <button type="button" className="fixed inset-0 bg-black/50" onClick={onClose} aria-label="Close modal" />
            <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
