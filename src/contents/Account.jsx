import React, { useState } from 'react'
import InputBox from '../components/InputBox';

function Account() {
    const [toggle, setToggle] = useState(true);

    const [emailArray, setEmailArray] = useState([]);
    const [passwordArray, setPasswordArray] = useState([]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const setInputEmail = (e) => { setEmail(e.target.value) };
    const setInputPassword = (e) => { setPassword(e.target.value) };
    const setInputConfirmPassword = (e) => { setConfirmPassword(e.target.value) };


    const registerHandle = (e) => {
        e.preventDefault();

        if (email === '' || password === '' || confirmPassword === '') {
            alert('Please enter your detail!');
            return;
        } else if (emailArray.indexOf(email) !== -1) {
            alert('This email have my account already!');
            return;
        } else if (password !== confirmPassword) {
            alert('Password is not different!')
            return;
        } else {
            alert('Register complete')
            setEmailArray([...emailArray, email]);
            setPasswordArray([...passwordArray, password]);

            setEmail('');
            setPassword('');
            setConfirmPassword('');

            return console.log(emailArray, passwordArray);
        }
    }

    const loginHandle = (e) => {
        e.preventDefault();
        var i = emailArray.indexOf(email);
        if (email === '' || password === '') {
            alert('Please enter your detail!');
            return;
        } else if (emailArray.indexOf(email) === -1) {
            alert('This email not have your account!, Please register first');
            return;
        } else if (passwordArray[i] !== password) {
            alert('Password is not correct!');
            return;
        }
        else {
            alert('Welcome, ' + email);
            setEmail('');
            setPassword('');
            return;
        }
    }

    const inputs = [
        {
            id: 1,
            name: 'email',
            label: 'Email',
            type: 'email',
            value: email,
            placeholder: 'Login@gmail.com',
            onchange: setInputEmail
        },
        {
            id: 2,
            name: 'password',
            label: 'Password',
            type: 'password',
            value: password,
            placeholder: '********',
            onchange: setInputPassword
        },
        {
            id: 3,
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
            value: confirmPassword,
            placeholder: '********',
            onchange: setInputConfirmPassword
        }
    ]

    return (
        <div className='account'>

            <button onClick={() => { setToggle(!toggle); }}>Toggle</button>

            {toggle
                ? <form id="login" >
                    <h1>Login</h1>
                    <InputBox name='email' label='Email' type='email' placeholder='Login@gmail.com' value={email} onChange={setInputEmail} />
                    <InputBox name='password' label='Password' type='password' placeholder='********' value={password} onChange={setInputPassword} />

                    <button type="submit" onClick={loginHandle}>Login</button>
                </form>
                // login
                : <form id="register">
                    <h1>Register</h1>                    
                    {inputs.map((input)=>{
                        return <InputBox key={input.id} name={input.name} label={input.label} type={input.type} placeholder={input.placeholder} value={input.value} onChange={input.onchange} />;
                    })}

                    <button type="submit" onClick={registerHandle}>Register</button>
                </form>
                // register
            }
            {/* toggle */}
        </div>
    )
}

export default Account
