import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Navbar } from 'react-bootstrap'

function Dashboard() {
    let navigate = useNavigate();

    var username;
    if (sessionStorage.getItem('token') === null) {
        username = '';
    } else {
        var token = sessionStorage.getItem('token');
        var decoded = jwt_decode(token);
        username = decoded.username;
    }

    const logout = () => {
        sessionStorage.removeItem("token");
        navigate('/');
    }

    useEffect(() => {
        if (sessionStorage.getItem('token') === null) {
            navigate('/');
        }
        else {
            navigate('/dashboard');
        }
    }, [navigate]);


    return (
        <>
            <Navbar bg='primary'>
                <div className='container-fluid px-5'>
                    <div className='navbar-brand text-light' href="#home">Navbar</div>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <button className='btn btn-danger'>Logout</button>
                        </li>
                    </ul>
                </div>
            </Navbar>

            <div className='container-fluid bg-light'>
                <div className='container py-5'>
                    Selamat Datang <b></b>!
                    <p>Ini adalah halaman dashboard implementasi Login dan Register menggunakan ReactJS-ExpressJS-MySql</p>
                    <blockquote>
                        Harapannya dengan pembelajaran ini peserta didik sudah mampu untuk membuat dan mengimplementasikan
                    </blockquote>
                </div>
            </div>
            <div className='container-fluid fixed-bottom py-3 text-center bg-secondary text-light'>
                Copyright &copy; Rudio Winaldo - 2022
            </div>
        </>
    )

}


export default Dashboard;