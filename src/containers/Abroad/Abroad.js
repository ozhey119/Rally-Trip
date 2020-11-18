import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { fireDb } from '../../firebase'
import RazImg from '../../images/raz.png'
import MakeContact from '../../components/Product/MakeContact';
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
                <h3>"אחרי 30 שנה של השתתפות בראליים בעולם, אני יודע להגיד בוודאות שגם את/ה יכול/ה לחוות ולהנות מראלי רייד בחו"ל."</h3>
                <img src={RazImg} alt='raz' className='raz-image' />
                <p>רז הימן השתתף בעשרות מרוצים בין לאומיים על אופנוע וברכב, בהם ראלי הדקאר (פעמיים), ראלי הפרעונים, דרך המשי ועוד רבים נוספים. רז מביא את הנסיון המקצועי והניהולי שלו בהוצאה וליווי של קבוצות ויחידים למרוצים בחו"ל.</p>
                <p>ראליים בחו"ל לא מיועדים רק לרוכבים ונהגים מקצועיים ורבי נסיון. השתתפות בראלי בחו"ל היא חוויה שכל אחד יכול להנות ממנה, מחובבנים ועד מקצוענים.  </p>
                <p></p>
                <h4>מה אני מציע? טיפול מקצה לקצה:</h4>
                <ul className='list'>
                    <li>הרשמה</li>
                    <li>שילוח הכלים מהארץ</li>
                    <li>טיסות</li>
                    <li>לינה</li>
                    <li>ייעוץ מקצועי</li>
                    <li>ליווי קבוצתי או אישי לפני ובזמן המרוץ</li>
                    <li>ועוד..</li>
                </ul>
                <h4>דוגמאות לראליים מהשנים האחרונות:</h4>
                <ul className='list'>
                    <li>Hellas Rally 2013</li>
                    <li>Hellas Rally 2014</li>
                    <li>Hellas Rally 2016</li>
                    <li>Hellas Rally 2018</li>
                    <li>Hellas Rally 2019</li>
                </ul>
                <p>בכל אחד מהראליים האלו השתתפו לפחות 8 רוכבים ונהגים ישראליים.</p>
                <h1 style = {{padding: '10px 0px'}}>הראלי הקרוב</h1>
                <ReactQuill theme="bubble" value={quillData} readOnly />
                <h4>לפרטים נוספים:</h4>
                <div><MakeContact alignRight withIcons /></div>
            </article>
        </div>

    );
}

export default Abroad;
