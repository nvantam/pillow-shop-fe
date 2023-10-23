import React from 'react';
import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../footer/footer.css';
function Footer() {

    return (

        <div style={{
            height: '170px',
            width: '100%',
            marginLeft: '5px',
            marginTop: '150px'
            // backgroundColor: 'white',
        }}>
            <hr style={{
                width: '86%',
                // marginLeft: '150px'
            }} />

            <div style={{
                height: '200px',
                display: 'flex',
                marginTop: '20px',
                justifyContent: 'space-around',
                // alignItems: 'center',
                // paddingTop: '15px',
            }}> <div >
                    <Link className='menu_header' to="/" >
                        <img style={{
                            marginTop: '15px'
                        }} src='https://preview.colorlib.com/theme/pillowmart/img/logo.png.webp' />
                    </Link>
                    <div style={{ marginTop: '20px' }}>
                        Website cung ứng sản phẩm <br /> gối chất lượng cao
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        Mặt hàng gối đa dạng <br /> dễ dàng mua bán
                    </div>
                </div>
                <div>
                    <h4 style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginLeft: '0px',
                    }}>
                        Thương Mại Điện Tử - Cửa Hàng TTL
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
                            <img style={{ width: '20px', position: 'relative', top: '3px' }} src='https://cdn.airpay.vn/images_v1/c134/icon_c13401_v001.png' />
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