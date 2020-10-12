import React from 'react';
import Backdrop from '../BackDrop/BackDrop';
import './Dialog.css';

const Dialog = ({ setDialogContent, dialogContent }) => {
    if (dialogContent) {
        return (
            <>
                <div className='dialog'>
                    <div >
                        {dialogContent}
                    </div>
                    <button className='confirm' onClick={() => setDialogContent((prevState) => !prevState)} >אישור</button>
                </div>
                <Backdrop setWindowOpen={setDialogContent} />
            </>
        );
    } else {
        return null;
    }

}

export default Dialog;
