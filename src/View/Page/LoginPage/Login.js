import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_API_URL } from '../../../config';
import { CloseOutlined } from '@ant-design/icons';
import '../LoginPage/Signup';
// import '../LoginPage/Forgetpass';
import '../LoginPage/log.css';
function Login() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const URL = process.env.REACT_APP_URL;

    const Login = () => {

        fetch(`${URL}/login`, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                alert(data.mes);
                if (data.mes == "Đăng nhập thành công") {
                    localStorage.setItem("usename", data.usename)
                    localStorage.setItem("id", data.id)

                    window.location.href = "/"
                }
                else {
                    data.mes = "Đăng nhập không thành công";
                }
            })
    }

    console.log(password)
    return (
        <div style={{
            margin:'0',
            padding:'0',
            boxSizing:'border-box'
        }}>
            <div style={{
                width: '100vw',
                height: '100vh',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    border: '1px solid pink',
                    backgroundColor: 'pink',
                    justifyContent: 'center',
                    width: '860px',
                    height: '430px'
                }}>
                    <div style={{
                        display: 'flex',
                        width: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <h1>Welcome to Pillow-Mart</h1>
                        <br />
                    </div>
                    <div style={{ backgroundColor: '#fff', }}>
                        <div style={{ marginLeft: '30px' }}>
                            <a style={{ color: 'red', fontSize: '32px' }}>Đăng Nhập</a>
                            <Link to="/HomePage">
                                <span className='x' style={{
                                    position: 'relative',
                                    top:'-10px',
                                    right: '-235px',
                                    // marginTop: '-40px',
                                    fontSize: '20px',
                                }}><CloseOutlined /></span>
                            </Link>
                            <div style={{ color: 'gray' }}>Welcome! Login to get amazing discounts and offers only for you</div><br />
                            <div style={{ color: 'gray', fontSize: '16px', marginTop: '20px' }}>Gmail:</div>
                            <input onChange={e => { setUsername(e.target.value) }} style={{ border: '1px solid gray', borderRadius: '10px', height: '30px', width: '300px' }} />
                            <div style={{ color: 'gray', fontSize: '16px', marginTop: '20px' }}>Mật khẩu:</div>
                            <input type='password' onChange={e => { setPassword(e.target.value) }} style={{ border: '1px solid gray', borderRadius: '10px', height: '30px', width: '300px' }} /><br />
                            <div style={{ marginTop: '30px', textAlign: 'center', position: "relative", left: '34px' }}>
                                <button onClick={() => Login()} style={{
                                    backgroundColor: '#B08EAD',
                                    fontSize: '20px',
                                    padding: '5px',
                                    color: 'white',
                                    border: '1px solid gray',
                                    borderRadius: '8px',
                                    position: 'relative',
                                    left: '1px'
                                }}>
                                    Đăng Nhập
                                </button>
                            </div>
                            <div>
                                <a>Bạn chưa có tài khoản?</a>
                                <Link className='log' to="/Signup">Đăng Kí</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login