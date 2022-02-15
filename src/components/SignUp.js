import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPassword2, setUserPassword2] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const create = { userName, userEmail, userPassword, userPassword2 }

        setIsLoading(true);

        fetch('http://localhost:8000/details', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(create)
        }).then(() => {
            console.log('New Account created');
            setIsLoading(false);
            history.push('/dashboard');
        })
    }

    return (
        <div className='create'>
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Your username' value={userName} onChange={(e) => setUserName(e.target.value)} /><br />
                <input type='email' placeholder='Your Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} /><br />
                <input type='password' placeholder='Password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} /><br />
                <input type='password' placeholder='Confirm password' value={userPassword2} onChange={(e) => setUserPassword2(e.target.value)} /><br />
                {!isLoading && <button>Sign Up</button>}
                {isLoading && <button disabled>Creating account...</button>}
            </form>
        </div>
    );
}

export default SignUp;