import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.css'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validasi, setValidasi] = useState('')


    const login = () => {
        // Cek USERNAME
        if (username === '') {
            setValidasi('Username atau Password harus diisi')
        }

        else if (password === '') {
            setValidasi('Username atau Password harus diisi')
        }
    }
    return (
        <div className='container py-5'>
            <h1 className='text-dark'>Login</h1>
            <p className='text-dark'>
                Please login to authenticate
            </p>
            <hr />
            <div className='form-group'>
                <label>Username</label>
                <input type='text' className='form-control rounded-5' onChange={(e) => { setUsername(e.target.value) }} ></input>
            </div>
            <div className='text-danger' onChange={() => setValidasi(validasi)}>{validasi}</div>
            <div className='form-group mt-4'>
                <label>Password</label>
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