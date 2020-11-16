import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { fireDb } from '../../firebase'
// import ReactQuill from 'react-quill';
import './Abroad.css';

const Abroad = () => {
    const [quillData, setQuillData] = useState('');

    useEffect(() => {
        fireDb.ref(`abroad`).on('value', snapshot => {
            if (snapshot.val() != null) {
                setQuillData(snapshot.val())
            }
        })
    }, []);

    return (
        <div className='page-container'>
            <h1 style={{ textAlign: 'center', padding: '15px 0px 20px' }}>ראליים בחו"ל</h1>
            <article className='abroad-container'>
                <ReactQuill theme="bubble" value={quillData} readOnly />
            </article>
        </div>

    );
}

export default Abroad;
