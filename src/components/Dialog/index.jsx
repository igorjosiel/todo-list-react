import React, { useEffect, useRef } from 'react';
import { IconClose } from '../icons';
import './dialog.styles.css'

export const Dialog = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef();

    useEffect(() => {
        if (isOpen) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [isOpen]);

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog.addEventListener("close", onClose);

        return () => {
            dialog?.removeEventListener("close", onClose);
        }
    }, [onClose]);

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <React.Fragment>
            <dialog ref={dialogRef} className='dialog'>
                <div className='btn-close-wrapper'>
                    <button autoFocus onClick={onClose} className='btn-close'>
                        <IconClose />
                    </button>
                </div>

                <div className='body'>
                    {children}
                </div>
            </dialog>
        </React.Fragment>
    );
}

export default Dialog;
