import React, { useEffect, useState, memo } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import '../../View/Page/ProductPage/Product';
import { Link } from "react-router-dom";
import './Header.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import Menu from './Menu'

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
        if (usename == 'admin') {
            setUsernameLogin(usename);
            return;
        }
        else {
            const email = usename;
            const atIndex = email.indexOf('@');
            setUsernameLogin(email.substring(0, atIndex));
            return;
        }
    }, [search, usernameLogin])


    return (
        <div className='menu' >
            <Link className='menu_header' to="/HomePage">
                <span className='logo' style={{
                    position: 'relative',
                    left: '35px',
                    fontSize: '35px',
                    fontFamily:'Brush Script MT',
                    fontWeight: '550',
                    color:'rgb(164, 113, 173)',
                    top: '-18px',
                    
                }}>Gối Gia Đình</span>
                <div className='menu_header item_logo' style={{
                }}>

                    <img style={{width:'140px'}} src='https://preview.colorlib.com/theme/pillowmart/img/logo.png.webp' />
                </div>
            </Link>
            <div className='item_search'>
                <Menu />
                <div >
                    <Link className='menu_header' to='https://www.facebook.com/profile.php?id=61552477385506' target="_blank"
                        rel="noopener noreferrer">Blog</Link>
                </div>
                <div className='item_input'>
                    <input onChange={e => handelSearch(e)} style={{ position: 'relative', border: '1px solid gray', borderRadius: '6px', height: '25px', width: '240px', marginRight: '-140px', top: '-4px' }} placeholder="Tìm kiếm"
                    />
                    {isLoad &&
                        <Dropdown
                            arrow={false}
                            overlay={
                                <div className='item_dropdown'  >
                                    {api?.map((ap, index) => (
                                        <div key={index} className='itemlist' >
                                            <a className='linkproduct' href={`/ProductDetails/` + ap._id}>
                                                <div className='item_1' style={{

                                                }}>
                                                    <img className='item_2' src={ap.img} />
                                                    <div className='item_3'>
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
            <div className='item_container' >
                <ShoppingCartOutlined onClick={tocart} className='menu_header item_cart' />
                <div >
                    {usernameLogin == undefined ?
                        <Link className='menu_header' to="/Login" >
                            <div className='menu_header item_login'>
                                Đăng Nhập
                            </div>
                        </Link>
                        : <div className='user item_username' style={{

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

export default memo(Header)