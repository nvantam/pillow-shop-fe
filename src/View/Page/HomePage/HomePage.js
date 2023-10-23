import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import './HomePage.css'
import { Link } from 'react-router-dom'
function HomePage() {

    const [apis, setApis] = useState([])
    const URL = process.env.REACT_APP_URL;

    useEffect(() => {
        fetch(`${URL}/getproducts`)
            .then(data => {
                return data.json()
            })
            .then(
                data => setApis(data.slice(0, 6))
            )
    }, []);
    return (
        <div>
            <Header />
            <div>
                <div style={{
                    backgroundColor: '#B08EAD',
                    marginTop: '70px',
                    fontSize: '40px',
                    height: '350px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}>
                    <h3>Trang Chủ</h3> </div>
                {/* khối 1 */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '-23px',
                    marginLeft: '15px',
                    width: '100%'
                }}>
                    <div style={{
                        width: '50%'
                    }}>
                        <div style={{
                            margin: '170px 0px 10px 110px',
                            fontSize: '30px',
                            textAlign: 'left',
                            color: '#4B3049',
                            
                        }}>
                            <h1>Gối chất lượng tốt nhất</h1>

                        </div>
                        <div style={{
                            fontSize: '18px',
                            marginLeft: '110px',
                            textAlign: 'left',
                            color: '#795376',
                            width:'80%'

                        }}>
                            Nơi bạn có thể khám phá và mua sắm những sản phẩm gối chất lượng, tạo sự thoải mái tối đa cho giấc ngủ của bạn
                        </div>
                        <Link className='item' to="/Product" >

                            <div className='shop_now' style={{
                                marginTop: '30px',
                                height: '40px',
                                width: '110px',
                                fontSize: '19px',
                                marginLeft: '110px',
                                textAlign: 'center',
                                padding: '15px 10px 5px 15px',
                            }}>
                                Shop now
                            </div>
                        </Link>

                    </div>
                    <div style={{width:'50%'}}>
                        <img
                            src='https://preview.colorlib.com/theme/pillowmart/img/banner.png.webp'
                            style={{
                                width: '83%',
                                marginRight: '-70px',
                                marginTop: '120px'
                            }}
                        />
                    </div>

                </div>
                {/* khối 2 */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '200px',
                    marginBottom: '120px',
                    marginLeft: '15px',
                    width:'100%'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginLeft: '-100px',
                        marginLeft: '93px',
                        width:'50%'

                    }} >
                        <img style={{
                            marginTop: '-40px',
                            marginBottom: '40px',
                            marginLeft: '20 px',
                            // width:'450px'

                        }} src='https://preview.colorlib.com/theme/pillowmart/img/product_overlay.png.webp' />
                        <div>
                            <img style={{
                                marginLeft: '-350px',
                                // width:'450px'

                            }} src='https://preview.colorlib.com/theme/pillowmart/img/single_product_1.png.webp' />
                        </div>
                    </div>
                    <div style={{
                        margin: '70px 80px 10px 46px',
                        //border:'1px solid red',
                        textAlign: 'left',
                        width:'50%'

                    }}>
                        <div style={{
                            fontSize: '20px',
                            //border: '1px solid red',
                            textAlign: 'left',
                            color: '#B08EAD',

                        }}>
                            <h5>Bắt đầu từ 5000đ</h5>
                        </div>
                        <div style={{
                            fontSize: '20px',
                            //border: '1px solid red',
                            textAlign: 'left',
                            color: '#4B3049',
                            width:'85%'

                        }}>
                            <h2>Vỏ gối với họa tiết hiện đại và thiết kế ngắn gọn</h2>
                        </div>
                        <Link className='item' to="/Product">
                            <div className='explore_now' style={{
                                marginTop: '30px',
                                height: '40px',
                                width: '120px',
                                fontSize: '14px',
                                textAlign: 'center',
                                padding: '15px 10px 0px 15px',
                            }}>
                                EXPLORE NOW
                            </div>
                        </Link>
                    </div>

                </div>
                {/* Khối 3 */}
                <div style={{
                    backgroundColor: '#F4EDF2',
                    paddingTop: '70px',

                }}>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '100px',
                    }}>
                        <h1>
                            Mặt Hàng Thịnh Hành
                        </h1>
                    </div>
                    {/* dòng 1 */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center', /* Căn giữa theo chiều dọc */
                        paddingTop: '40px',
                        flex: 1,
                    }} >
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            position: 'relative',
                            justifyContent: 'space-around',
                            width: '87%'

                        }} >
                            {/* vòng lặp */}
                            {apis.map(listProduct => (
                                <Link className='item' to={`/ProductDetails/` + listProduct._id}>
                                    <div style={{
                                        //marginTop: '50px',
                                        marginBottom: '100px',
                                    }}>
                                        <img src={listProduct.img} alt="" style={{
                                            width: '370px'
                                        }} />
                                        <div className='name_product'>
                                            <h3 >
                                                {listProduct.name}
                                            </h3>
                                        </div>
                                        <div className='name_product'>
                                            Giá {listProduct.price}đ
                                        </div>
                                    </div>
                                </Link>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage