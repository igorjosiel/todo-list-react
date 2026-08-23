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

                {children}
            </dialog>
        </React.Fragment>
    );
}

export default Dialog;
