import React from 'react';
import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../footer/footer.css';
function Footer() {

    return (

        <div className='menu_footer' >
            <hr />
            <span className='logo' style={{
                    position: 'relative',
                    left: '210px',
                    fontSize: '35px',
                    fontFamily:'Brush Script MT',
                    fontWeight: '550',
                    color:'rgb(164, 113, 173)',
                    top: '45px',
                }}>Gối Gia Đình</span>
            <div className='menu_container'> <div >
                <Link to="/" >
                    <img className='item_logo1' src='https://preview.colorlib.com/theme/pillowmart/img/logo.png.webp' />
                </Link>
                <div className='item_text'>
                    Website cung ứng sản phẩm <br /> gối chất lượng cao
                </div>
                <div className='item_text'>
                    Mặt hàng gối đa dạng <br /> dễ dàng mua bán
                </div>
            </div>
                <div>
                    <h4 className='item_container1' >
                        Gối Gia Đình - PillowMart
                    </h4>

                    <div className="footer-links">
                        <div className="footer-list" >
                            <div><a className="footer-link" href="#">Trang chủ</a></div>
                            <div><a className="footer-link" href="#">Sản phẩm</a></div>
                            <div><a className="footer-link" href='https://www.facebook.com/profile.php?id=61552477385506' target="_blank" rel="noopener noreferrer">Blog</a></div>
                        </div>
                    </div>
                    <h4>
                        Blog của chúng tôi <a style={{
                            fontSize: '20px',
                        }} href='https://www.facebook.com/profile.php?id=61552477385506' target="_blank" rel="noopener noreferrer"><FacebookOutlined style={{ marginRight: '10px' }} /></a>
                    </h4 >
                </div>
                <div >

                    <h4>
                        Liên Hệ/Hỗ Trợ
                    </h4>
                    <div>
                        96 Định Công, Hoàng Mai, Hà Nội,<br /> Việt Nam
                    </div>
                    <div>
                        Pillowmartshop@gmail.com
                    </div>
                    <h4>
                        Thanh Toán <span>
                            <img className='item_pay' src='https://cdn.airpay.vn/images_v1/c134/icon_c13401_v001.png' />
                        </span>
                    </h4>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer