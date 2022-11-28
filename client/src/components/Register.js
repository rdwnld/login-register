import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './style.css'


function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [nama, setNama] = useState('')
    const [validasi, setValidasi] = useState('')
    let navigate = useNavigate();


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
        else {
            // Proses
            // console.log(username, password, nama)

            Axios.post("http://localhost:3001/register", {
                username: username,
                password: password,
                nama: nama
            })

            navigate('/')
        }
    }

    return (
        <div className='container py-5 mantap'>
            <h1 className='text-dark'>Register</h1>
            <p className='text-dark'>
                Please register to authenticate
            </p>
            <hr />
            <div className='text-danger mb-3' onChange={() => setValidasi(validasi)}>{validasi}</div>
            <div className='form-group'>
                <label>Username</label>
                <input type='text' onChange={(e) => { setUsername(e.target.value) }} ></input>
            </div>
            <div className='form-group mt-3'>
                <label>Password</label>
                <input type='password' onChange={(e) => { setPassword(e.target.value) }} ></input>
            </div>
            <div className='form-group mt-3'>
                <label>Nama</label>
                <input type='text' onChange={(e) => { setNama(e.target.value) }} ></input>
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