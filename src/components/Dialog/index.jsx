import React, { useEffect, useRef } from 'react';
import './dialog.styles.css'
import { IconClose } from '../icons';
// import { IconClose } from '../icons';

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

    // "Show the dialog" button opens the dialog modally
    const openDialog = () => {
        dialogRef.current.showModal();
    };

    // "Close" button closes the dialog
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
