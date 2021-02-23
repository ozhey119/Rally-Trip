import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <title>ראליים בחו"ל - Rally Trip</title>
                <meta name="description" content='רז הימן מוציא קבוצות ויחידים למרוצים בין לאומיים בחו"ל '/>
            </Helmet>
            <h1 style={{ textAlign: 'center', padding: '15px 0px 20px' }}>ראלי רייד בחו"ל</h1>
            <article className='abroad-container'>
                <h3>"אחרי 30 שנה של השתתפות בראליים בעולם, אני יודע להגיד בוודאות שגם את/ה יכול/ה לחוות ולהנות מראלי רייד בחו"ל."</h3>
                <img src={RazImg} alt='raz' className='raz-image' />
                <p>רז הימן השתתף כרוכב, נהג ונווט בעשרות מרוצים בין לאומיים על אופנוע, רכב וSBS, ביניהם ראלי דקאר, דרך המשי, באחה 1000, מרוקו, פרעונים ועוד רבים נוספים. </p>
                <p>רז ניהל וליווה קבוצות ויחידים במרוצים רבים, ביניהם מרוצי ראלי רייד באירופה, מרוצי ISDE, מוטוקרוס האומות, מרוצי הארד אנדורו ועוד.</p>
                <p>ראליים בחו"ל לא מיועדים רק לרוכבים ונהגים מקצועיים ורבי נסיון. השתתפות בראלי בחו"ל היא חוויה שכל אחד יכול להנות ממנה, ממקצוענים ועד חובבנים.  </p>
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
                <h1 style={{ padding: '10px 0px' }}>הראלי הקרוב</h1>
                <ReactQuill theme="bubble" value={quillData} readOnly />
                <h4>לפרטים נוספים:</h4>
                <div><MakeContact alignRight withIcons /></div>
            </article>
        </div>

    );
}

export default Abroad;
