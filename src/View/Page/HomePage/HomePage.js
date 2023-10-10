import React, { useEffect } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import './HomePage.css'
import Lib from '@ant-design/icons'
import { Link } from 'react-router-dom'
function HomePage() {
    const listProducts = [
        {
            id: 1, img: "https://preview.colorlib.com/theme/pillowmart/img/tranding_item/tranding_item_1.png.webp", name: "Cervical pillow for airplane car office nap pillow", price: 5
        },
        {
            id: 2, img: "https://preview.colorlib.com/theme/pillowmart/img/tranding_item/tranding_item_2.png.webp",  name: "Foam filling cotton slow rebound pillows", price: 5
        },
        {
            id: 3, img: "https://preview.colorlib.com/theme/pillowmart/img/tranding_item/tranding_item_3.png.webp", name: "Memory foam filling cotton Slow rebound pillows", price: 5
        },
        {
            id: 4, img: "https://preview.colorlib.com/theme/pillowmart/img/tranding_item/tranding_item_4.png.webp", name: "Cervical pillow for airplane car office nap pillow", price: 5
        },
        {
            id: 5, img: "https://preview.colorlib.com/theme/pillowmart/img/tranding_item/tranding_item_5.png.webp", name: "Foam filling cotton slow rebound pillows", price: 5
        },
        {
            id: 6, img: "https://preview.colorlib.com/theme/pillowmart/img/tranding_item/tranding_item_6.png.webp", name: "Memory foam filling cotton Slow rebound pillows", price: 5
        },
    ]

    // useEffect(() => {
    //     fetch('http://localhost:4000/')
    //     .then(data => {
    //         return data.json()
    //     })
    //     .then(
    //         data => console.log({data})
    //     )
    // },[])

    return (
        <div>
            <Header />
            <div>
                {/* khối 1 */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '-23px',
                    marginLeft:'15px',
                }}>
                    <div style={{

                    }}>
                        <div style={{
                            margin: '170px 0px 10px 110px',
                            fontSize: '30px',
                            textAlign: 'left',
                            color: '#4B3049',

                        }}>
                            <h1>Best quality pillow</h1>

                        </div>
                        <div style={{
                            fontSize: '20px',
                            marginLeft: '110px',
                            textAlign: 'left',
                            color: '#795376',
                        }}>
                            Seamlessly empower fully researched growth strategies and interoperable internal
                        </div>
                        <div className='shop_now' style={{
                            marginTop: '30px',
                            height: '40px',
                            width: '110px',
                            fontSize: '19px',
                            marginLeft: '110px',
                            textAlign: 'center',
                            padding: '15px 10px 5px 15px',
                        }} >
                            shop now
                        </div>

                    </div>
                    <div>
                        <img
                            src='https://preview.colorlib.com/theme/pillowmart/img/banner.png.webp'
                            style={{
                                width: '90%',
                                marginRight: '-70px',
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
                    marginLeft:'15px',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginLeft: '-45px',
                        marginLeft: '93px',
                    }} >
                        <img style={{
                            marginTop: '-40px',
                            marginBottom: '40px',
                            marginLeft: '24px',

                        }} src='https://preview.colorlib.com/theme/pillowmart/img/product_overlay.png.webp' />
                        <div>
                            <img style={{
                                marginLeft: '-350px',

                            }} src='https://preview.colorlib.com/theme/pillowmart/img/single_product_1.png.webp' />
                        </div>
                    </div>
                    <div style={{
                        margin: '70px 80px 10px 130px',
                        //border:'1px solid red',
                        textAlign: 'left',

                    }}>
                        <div style={{
                            fontSize: '20px',
                            //border: '1px solid red',
                            textAlign: 'left',

                            color: '#B08EAD',

                        }}>
                            <h5>Started from $10</h5>
                        </div>
                        <div style={{
                            fontSize: '20px',
                            //border: '1px solid red',
                            textAlign: 'left',
                            color: '#4B3049',

                        }}>
                            <h2> Printed memory foam brief modern throw pillow case</h2>
                        </div>
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
                    </div>

                </div>
                {/* Khối 3 */}
                <div style={{
                    backgroundColor: '#F4EDF2',
                    paddingTop: '70px',
                }}>
                    <div style={{
                        textAlign: 'center',
                    }}>
                        <h1>Trending Items</h1>
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
                            {listProducts.map(listProduct => (
                                <Link className='item'  to={`/ProductDetails/` + listProduct.id}>
                                    <div style={{
                                        marginTop: '50px'
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
                                            From {listProduct.price}$
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