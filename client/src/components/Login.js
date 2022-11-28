import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './style.css'

Axios.defaults.withCredentials = true;

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    let navigate = useNavigate();


    const login = () => {
        // Cek USERNAME
        if (username === '') {
            setStatus('Username atau Password harus diisi')
        }

        else if (password === '') {
            setStatus('Username atau Password harus diisi')
        }
        else {
            Axios.post("http://localhost:3001/login", {
                username: username,
                password: password,
            }).then((response) => {
                if (response.data.message) {
                    setStatus(response.data.message);
                } else {
                    sessionStorage.setItem('token', response.data);
                    navigate('/dashboard');
                }
            });
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("token ") === null) {
            navigate('/');
        } else {
            navigate('/dashboard');
        }
    }, [navigate]);

    return (
        <div className='container py-5 mantap'>
            <h1 className='text-dark'>Login</h1>
            <p className='text-dark'>
                Please login to authenticate
            </p>
            <hr />
            <div className='text-danger mb-3' onChange={() => setStatus(status)}>{status}</div>
            <div className='form-group'>
                <label>Username</label>
                <input type='text' onChange={(e) => { setUsername(e.target.value) }} ></input>
            </div>
            <div className='form-group mt-3'>
                <label>Password</label>
                <input type='password' onChange={(e) => { setPassword(e.target.value) }} ></input>
            </div>
            <div className='form-group'>
                <button className='btn btn-success mt-3 rounded-5' onClick={login} >Login</button>
            </div>
            <p className='text-dark'>
                Don't have an account? please <Link to='/register'>Register</Link>
            </p>
        </div>
    );
}

export default Login;