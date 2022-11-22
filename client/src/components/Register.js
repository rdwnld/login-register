import { Link } from 'react-router-dom';
import { useState } from 'react';


function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [nama, setNama] = useState('')
    const [validasi, setValidasi] = useState('')


    const register = () => {
        // Cek USERNAME
        if (username === '') {
            setValidasi('Username, Password atau Nama harus diisi')
        }

        else if (password === '') {
            setValidasi('Username, Password atau Nama harus diisi')
        }
        else if (nama === '') {
            setValidasi('Username, Password atau Nama harus diisi')
        }
    }
    return (
        <div className='container py-5'>
            <h1 className='text-dark'>Register</h1>
            <p className='text-dark'>
                Please register to authenticate
            </p>
            <hr />
            <div className='form-group'>
                <label>Username</label>
                <input type='text' className='form-control rounded-5' onChange={(e) => { setUsername(e.target.value) }} ></input>
            </div>
            <div className='text-danger' onChange={() => setValidasi(validasi)}>{validasi}</div>
            <div className='form-group mt-3'>
                <label>Password</label>
                <input type='password' className='form-control rounded-5' onChange={(e) => { setPassword(e.target.value) }} ></input>
            </div>
            <div className='form-group mt-3'>
                <label>Nama</label>
                <input type='text' className='form-control rounded-5' onChange={(e) => { setNama(e.target.value) }} ></input>
            </div>
            <div className='form-group'>
                <button className='btn btn-success mt-3 rounded-5' onClick={register} >Register</button>
            </div>
            <p className='text-dark'>
                Have an account? please <Link to='/'>Login</Link>
            </p>
        </div>
    );
}

export default Register;