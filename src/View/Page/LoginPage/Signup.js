import { React, useRef, useEffect, useState } from 'react'
import { BASE_API_URL } from '../../../config'
import { CloseOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../LoginPage/Login'
import '../LoginPage/log.css'
function Signup() {
    const [usernsme, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRePassword] = useState("")
    const [showError, setShowError] = useState(false);
    const [showError1, setShowError1] = useState(false);
    const [showError2, setShowError2] = useState(false);


    const URL = process.env.REACT_APP_URL;

    function isGmailEmail(email) {
        // Sử dụng biểu thức chính quy để kiểm tra định dạng email
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
        return gmailRegex.test(email);
    }

    const Signup = () => {
        if (isGmailEmail(usernsme) && password.length >= 6 && password == repassword) {
            fetch(`${URL}/register`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                //make sure to serialize your JSON body
                body: JSON.stringify({
                    username: usernsme,
                    password: password
                })
            })
                .then((data) => {
                    return data.json()
                })
                .then((data) => {
                    alert(data.mes)
                    if (data.mes == "Đăng ký thành công") {
                        window.location.href = "/Login"
                    }
                    else {
                        return;
                    }
                })
        } if (!isGmailEmail(usernsme)) {
            setShowError(true);
        }if (isGmailEmail(usernsme)) {
            setShowError(false);
        }if(password.length<6){
            setShowError1(true);
        }if(password.length>6){
            setShowError1(false);
        }if(password !=repassword){
            setShowError2(true);
        }
    }

    return (
        <div style={{
            width: '100%',
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
                width: '950px',
                height: '500px'
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
                    <a></a>
                </div>
                <div style={{ backgroundColor: '#fff', }}>
                    <div style={{ marginLeft: '30px' }}>
                        <div style={{ color: 'red', fontSize: '32px' }}>Đăng Kí</div>
                        <Link className='x' to="/HomePage">
                            <div style={{
                                position: 'relative',
                                left: '420px',
                                marginTop: '-40px',
                                fontSize: '20px'
                            }}><CloseOutlined /></div>
                        </Link> <br />
                        <div style={{ color: 'gray' }}>Welcome! Login to get amazing discounts and offers only for you</div><br />
                        <div style={{ color: 'gray', fontSize: '16px', marginTop: '-10px' }}>Gmail:</div>
                        <input onChange={e => setUsername(e.target.value)} type='email' required style={{ border: '1px solid gray', borderRadius: '10px', height: '30px', width: '300px' }} />
                        {showError&& <p style={{color:'red',fontSize:'14px'}}>Vui lòng nhập đúng gmail!</p>}
                        <div id='password' style={{ color: 'gray', fontSize: '16px', marginTop: '20px' }}>Mật khẩu:</div>
                        <input type='password' onChange={e => setPassword(e.target.value)} style={{ border: '1px solid gray', borderRadius: '10px', height: '30px', width: '300px' }} />
                        {showError1&& <p style={{color:'red',fontSize:'14px'}}>Mật khẩu phải từ 6 kí tự!</p>}
                        <div id='repassword' style={{ color: 'gray', fontSize: '16px', marginTop: '20px' }}>Nhập lại mật khẩu:</div>
                        <input type='password' onChange={e => setRePassword(e.target.value)} style={{ border: '1px solid gray', borderRadius: '10px', height: '30px', width: '300px' }} /><br />
                        {showError2&& <p style={{color:'red',fontSize:'14px'}}>Vui lòng nhập đúng mật khẩu!</p>}
                        <div style={{ marginTop: '30px', textAlign: 'center', position: "relative", left: '30px' }}>
                            <button onClick={() => Signup()} style={{
                                backgroundColor: '#B08EAD',
                                fontSize: '20px',
                                padding: '5px',
                                color: '#fff',
                                border: '1px solid gray',
                                borderRadius: '8px',
                                marginLeft: '10px',

                            }}>
                                Đăng Kí
                            </button>
                        </div>
                        <div>
                            Bạn đã có tài khoản?
                            <Link className='log' to="/Login">Đăng nhập</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup