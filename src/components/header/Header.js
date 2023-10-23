import React, { useEffect, useState } from 'react';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import '../../View/Page/ProductPage/Product';
import { Link } from "react-router-dom";
import './Header.css';
// import { URL } from '../../config';
import { DownOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';s
import { Dropdown } from 'antd';

function Header() {

    const usename = localStorage.getItem("usename");
    const userid = localStorage.getItem("id");

    const [search, setSearch] = useState('');
    const [usernameLogin, setUsernameLogin] = useState('');

     
    const logout = () => {
        localStorage.clear();
        window.location.href = '/Login';
    }
    const tocart = () => {
        if (!usename) {
            window.location.href = '/Login';
        }
        else
            window.location.href = '/Cart/' + userid;
    }
    const [api, setApis] = useState()
    const [isLoad, setIsLoad] = useState(false)
    const URL = process.env.REACT_APP_URL;

    //hamf xuwr lys search
    const handelSearch = (e) => {
        setSearch(e.target.value)
        fetch(`${URL}/search/${e.target.value}`)
            .then(data => {
                return data.json()
            })
            .then(
                data => {
                    setApis(data.metadata.slice(0, 3))
                }
            )
    }
    useEffect(() => {
        if (search == "") {
            setIsLoad(false)
            
        }
        else {
            setIsLoad(true)
        }
        if (!usename) {
            setUsernameLogin(undefined);
            return;
        }
        if(usename=='admin'){
            setUsernameLogin(usename);
            return;
        }
        else{
            const email = usename;
            const atIndex = email.indexOf('@');
            setUsernameLogin(email.substring(0, atIndex));
            return;
        }
       
    }, [search,usernameLogin])
    return (
        <div style={{
            position: 'fixed',
            padding: '20px',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            height: '40px',
            backgroundColor: 'white',
            top: '0px',
            zIndex: 1,
        }}>

            <Link className='menu_header' to="/HomePage">

                <div className='menu_header' style={{
                    marginLeft: '20px',
                }}>
                    <img src='https://preview.colorlib.com/theme/pillowmart/img/logo.png.webp' />
                </div>
            </Link>
            <div style={{
                display: 'flex',
                justifyContent: ' space-around',
                width: '40%',
                fontSize: '19px',
                marginTop: '5px',
            }}>
                <div>
                    <Link to="/HomePage" className='menu_header' >Trang Chủ</Link>
                </div>
                <div >
                    <Link to="/Product" className='menu_header'>Sản Phẩm</Link>
                </div>
                <div >
                    {/* <Link className='menu_header' to="/Blog" >Blog</Link> */}
                    <a className='menu_header' href='https://www.facebook.com/profile.php?id=61552477385506' target="_blank" rel="noopener noreferrer">Blog</a>
                </div>
                <div style={{
                    width: '200px',
                    marginRight: '-100px',
                }}  >
                    <input onChange={e => handelSearch(e)} style={{ position: 'relative', border: '1px solid gray', borderRadius: '6px', height: '25px', width: '240px', marginRight: '-140px', top: '-4px' }} placeholder="Tìm kiếm"
                    />
                    {isLoad &&
                        <Dropdown
                            arrow={false}
                            overlay={
                                <div style={{
                                    marginTop: '22px',
                                    width: '90px',
                                    position: 'absolute',
                                    left: '65px',
                                    top: '18px',
                                    // backgroundColor: 'red',
                                    // opacity: '0.7'
                                }}>
                                    {api?.map((ap, index) => (
                                        <div key={index} style={{
                                            backgroundColor: '#B08EAD',
                                            color: 'black',
                                            marginLeft: '-170px',
                                        }}>
                                            <a className='linkproduct' href={`/ProductDetails/` + ap._id}>
                                                <div style={{
                                                    display: 'flex',
                                                    padding: '20px'
                                                }}>
                                                    <img src={ap.img} style={{
                                                        width: '50px',
                                                        height: '50px'
                                                    }} />
                                                    <div style={{
                                                        marginLeft: '20px',
                                                        color: 'white',
                                                    }}>
                                                        {ap.name}
                                                        <div>
                                                            {ap.price}đ
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            }
                            visible={true} // Đặt giá trị `visible` để mở dropdown ngay từ đầu
                        >
                            <DownOutlined />
                        </Dropdown>
                    }
                </div>
            </div>
            <div style={{
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'space-around',
                width: '180px',
                marginTop: '10px',
            }}>


                <ShoppingCartOutlined onClick={tocart} className='menu_header' style={{
                    width: '15%',
                    position: 'relative',
                    top: '-4px',
                    left: '-65px',
                }} />
                <div >

                    {usernameLogin == undefined ?
                        <Link className='menu_header' to="/Login" >
                            <div className='menu_header' style={{
                                width: '100%',

                                fontSize: '20px',
                                marginTop: '-8px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                position: 'relative',
                                left: '-30px'
                            }}>
                                Đăng Nhập
                            </div>

                        </Link>
                        : <div className='user' style={{
                            position: 'relative',
                            right: '-15px',
                            fontSize: '18px',
                            marginTop: '-6px',
                            width: '140px'
                        }} >{usernameLogin}
                            <ul>
                                <li className='logout' onClick={logout}> Đăng xuất</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header