import React, { useState, useEffect } from 'react';
import { fireAuth } from '../../firebase'
import { useForm } from "react-hook-form"
import ProductManager from './ProductManager'
import './Admin.css';

const Admin = () => {
    const { register, handleSubmit, errors } = useForm();
    const [isSignedIn, setIsSignedIn] = useState(false);


    const onSubmit = ({ email, password }) => {
        fireAuth.signInWithEmailAndPassword(email, password).catch((error) => {
            console.log(`Error code: ${error.code}`);
            console.log(`Error message: ${error.message}`)
        });
    }


    const signOut = () => {
        fireAuth.signOut().then(function () {
            console.log('signed out successfully')
        }).catch(function (error) {
            console.log(error)
        });
    }

    useEffect(() => {
        fireAuth.onAuthStateChanged(function (user) {
            if (user) {
                console.log('You are logged in!')
                setIsSignedIn(user);
            } else {
                console.log('No one is logged in.')
                setIsSignedIn(false);
            }
        });
    }, [])

    if (!isSignedIn)
        return (
            <article className='page-container'>
                <form onSubmit={handleSubmit(onSubmit)} className='form small'>
                    <h2 style={{ padding: '0px 0px 10px' }}>כניסת מנהל</h2>
                    <label>אימייל</label>
                    <input type="text" name="email" ref={register({ required: true })} placeholder="אימייל" />
                    {errors.email && <span className="error">יש להכניס אימייל</span>}
                    <label>סיסמא</label>
                    <input type='password' name="password" ref={register({ required: true })} placeholder="סיסמא" />
                    {errors.password && <span className="error">יש להכניס סיסמא</span>}
                    <input type="submit" value="התחבר" className = "button"/>
                </form>
            </article>
        );
    else {
        return (
            <article className='page-container'>
                <h2>עמוד מנהל</h2>
                <button className = 'button' onClick={signOut}>התנתק</button>
                <ProductManager />
            </article>
        );
    }

}


export default Admin;
