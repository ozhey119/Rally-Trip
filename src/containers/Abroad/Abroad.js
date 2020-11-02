import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
import './Abroad.css';

const Abroad = () => {
    // const [quillData, setQuillData] = useState('');

    // After the current product id changes, we will change the fields accordingly
    // useEffect(() => {
    //     fireDb.ref(`???`).on('value', snapshot => {
    //         if (snapshot.val() != null) {
    //             setQuillData(snapshot.val())
    //         }
    //     })
    // }, [id]);

    return (
        <div className='page-container'>
            <h2>אחרי 30 שנה של השתתפות בראליים בעולם, אני יודע להגיד בוודאות שגם את/ה יכול/ה לחוות ולהנות מראלי רייד בחו"ל.</h2>
            {/* <ReactQuill theme="bubble" value={quillData} readOnly /> */}
        </div>

    );
}

export default Abroad;
