import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_API_URL } from '../../../config'
import { CloseOutlined } from '@ant-design/icons'
import './Signup'
import '../LoginPage/log.css'
function Forgetpass() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const URL = process.env.REACT_APP_URL;

    const Forget = () => {

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
                return data.json()
            })
            .then((data) => {
                alert(data.mes)
                if (data.mes == "Đăng nhập thành công") {
                    window.location.href = "/"
                }
                else {
                    data.mes = "Đăng nhập không thành công";
                }
            })
    }

    return (
        <div>

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
                        <a></a>
                    </div>
                    <div style={{ backgroundColor: '#fff', }}>
                        <div style={{ marginLeft: '30px' }}>
                            <a style={{ color: 'red', fontSize: '32px' }}>Quên Mật khẩu</a>
                            <Link to="/HomePage">
                                <div className='x' style={{
                                    position: 'relative',
                                    left: '405px',
                                    marginTop: '-40px',
                                    fontSize: '20px',
                                }}><CloseOutlined /></div>
                            </Link><br />
                            <div style={{ color: 'gray' }}>Welcome! Login to get amazing discounts and offers only for you</div><br />
                            <div style={{ color: 'gray', fontSize: '16px', marginTop: '20px' }}>Gmail:</div>
                            <input onChange={e => { setUsername(e.target.value) }} style={{ border: '1px solid gray', borderRadius: '10px', height: '30px', width: '300px' }} />
                            <div style={{ color: 'gray', fontSize: '16px', marginTop: '20px' }}>Mật khẩu:</div>
                            <input onChange={e => { setPassword(e.target.value) }} style={{ border: '1px solid gray', borderRadius: '10px', height: '30px', width: '300px' }} /><br />
                            <div style={{ marginTop: '30px', textAlign: 'center', position: "relative", left: '34px' }}>
                                <button onClick={() => Forget()} style={{
                                    backgroundColor: '#B08EAD',
                                    fontSize: '20px',
                                    padding: '5px',
                                    color: 'white',
                                    border: '1px solid gray',
                                    borderRadius: '8px',
                                    position: 'relative',
                                    left: '1px'
                                }}>
                                    Lấy mật khẩu
                                </button>
                            </div>
                            <div>
                                <a>Bạn chưa có tài khoản?</a>
                                <Link className='log' to="/Signup">Đăng Kí</Link>
                            </div>
                            <div>                                
                                <Link className='log' to="/Login">Đăng nhập?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Forgetpass