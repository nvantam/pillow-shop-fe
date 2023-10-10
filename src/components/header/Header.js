import React from 'react'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import './Header.css'
import '../../View/Page/ProductPage/Product';
import { Outlet, Link } from "react-router-dom";


function Header() {
    return (
        <div style={{
            position: 'fixed',
            padding: '20px',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            height: '30px',
            backgroundColor: 'white',
            top: '0px',
            zIndex: 1,

        }}>
            <div className='menu_header'>
                <img src='https://preview.colorlib.com/theme/pillowmart/img/logo.png.webp' />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: ' space-around',
                width: '40%',
                fontSize: '19px',
                marginTop: '5px',
            }}>
                <div>
                    <Link to="/HomePage" className='menu_header' >Home</Link>
                </div>
                <div className='menu_header'>About</div>
                <div >
                    <Link to="/Product" className='menu_header'>Product</Link>
                </div>
                <div >
                    <Link className='menu_header' to="/Blog">Blog</Link>
                </div>
                <div className='menu_header'>Contact</div>
            </div>
            <div style={{
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '70px',
                marginTop: '10px',
            }}>
                <SearchOutlined className='menu_header' />
                <ShoppingCartOutlined className='menu_header' />
            </div>
            <div>
                login/ logout
            </div>
        </div>
    )
}

export default Header