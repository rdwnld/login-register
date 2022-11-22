import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import Axios from 'axios';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validasi, setValidasi] = useState('')
    let navigate = useNavigate();


    const login = () => {
        // Cek USERNAME
        if (username === '') {
            setValidasi('Username atau Password harus diisi')
        }

        else if (password === '') {
            setValidasi('Username atau Password harus diisi')
        }
        else {
            Axios.post("http://localhost:3001/login", {
                username: username,
                password: password,
            }).then((response) => {
                if (response.data.message) {
                    setValidasi(response.data.message);
                } else {
                    sessionStorage.setItem('token', response.data);
                    navigate('/dashboard');
                }
            });
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('token') === null) {
            navigate('/');
        } else {
            navigate('/dashboard')
        }
    }, [navigate]);

    return (
        <div className='container py-5'>
            <h1 className='text-dark'>Login</h1>
            <p className='text-dark'>
                Please login to authenticate
            </p>
            <hr />
            <div className='form-group'>
                <label><b>Username</b></label>
                <input type='text' className='form-control rounded-5' onChange={(e) => { setUsername(e.target.value) }} ></input>
            </div>
            <div className='text-danger' onChange={() => setValidasi(validasi)}>{validasi}</div>
            <div className='form-group mt-4'>
                <label><b>Password</b></label>
                <input type='password' className='form-control rounded-5' onChange={(e) => { setPassword(e.target.value) }} ></input>
            </div>
            <div className='form-group'>
                <button className='btn btn-success mt-3 rounded-5' onClick={login} >LOGIN</button>
            </div>
            <p className='text-dark'>
                Don't have account? please <Link to='/register'>Register</Link>
            </p>
        </div>
    );
}

export default Login;