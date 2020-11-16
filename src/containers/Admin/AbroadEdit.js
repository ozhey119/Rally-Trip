import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { fireDb } from '../../firebase'
import Loader from '../../components/Loader/Loader';
import Dialog from '../../components/Dialog/Dialog';
import { modules, formats } from './quillConfig'
import 'react-quill/dist/quill.snow.css';
import './Admin.css';

const AbroadEdit = () => {
    const [editorValue, setEditorValue] = useState('<p class="ql-align-right ql-direction-rtl"><br></p>'); //Quill data
    const [isLoading, setIsLoading] = useState(false); // Loading indicator
    const [dialogContent, setDialogContent] = useState(false); // Dialog handler

    const onSubmit = () => {
        setIsLoading(true)
        let abroadRef = fireDb.ref()
        abroadRef.update({ abroad: editorValue }, (error) => {
            if (error) {
                setIsLoading(false);
                setDialogContent("תקלה :" + error);
            } else {
                setIsLoading(false);
                setDialogContent("העדכון בוצע בהצלחה");
            }
        });
    }


    // reset the quill data to the current data
    useEffect(() => {
        fireDb.ref(`abroad`).on('value', snapshot => {
            if (snapshot.val() != null) {
                setEditorValue(snapshot.val())
            }
        })
    }, [])


    return (
        <article className='abroad-edit'>
            <div>
                <ReactQuill theme="snow" value={editorValue} onChange={setEditorValue} modules={modules} formats={formats} />
                <button className='button green big' onClick={() => onSubmit()}>עדכן</button>
            </div>
            {isLoading ? <Loader fullscreen /> : null}
            <Dialog dialogContent={dialogContent} setDialogContent={setDialogContent} />
        </article>
    );
}


export default AbroadEdit;
