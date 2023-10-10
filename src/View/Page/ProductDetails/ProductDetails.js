import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import Product from '../ProductPage/Product'
import { Link, useParams } from 'react-router-dom'
import Cart from '../CartPage/Cart'
import './ProductDetail.css'
function ProductDetails() {
    const { productId } = useParams()
    const listProducts = [
        {
            id: 1, img: "https://preview.colorlib.com/theme/pillowmart/img/tranding_item/tranding_item_1.png.webp ",
            name: "Cervical pillow for airplane car office nap pillow",
            price: 5,
            description: "Introducing our versatile Cervical Pillow, designed to provide you with exceptional comfort and support whether you're traveling on an airplane, commuting in your car, working at the office, or simply taking a quick nap.",
        },
        {
            id: 2, img:[
                
            ] ,
            name: "Foam filling cotton slow rebound pillows", price: 5,
            description: "Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources 2",
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
        {
            //lấy api
            id: 7, img: "https://preview.colorlib.com/theme/pillowmart/img/product/product_list_1.png.webp", name: "Cervical pillow for airplane car office nap pillow", price: 5
        },
        {
            id: 8, img: "https://preview.colorlib.com/theme/pillowmart/img/product/product_list_2.png.webp", name: "Geometric striped flower home classy decor", price: 5
        },
        {
            id: 9, img: "https://preview.colorlib.com/theme/pillowmart/img/product/product_list_3.png.webp", name: "Foam filling cotton slow rebound pillows", price: 5
        },
        {
            id: 10, img: "https://preview.colorlib.com/theme/pillowmart/img/product/product_list_4.png.webp", name: "Memory foam filling cotton Slow rebound pillows", price: 5
        },
        {
            id: 11, img: "https://preview.colorlib.com/theme/pillowmart/img/product/product_list_5.png.webp", name: "Memory foam filling cotton rebound pillows", price: 5
        },
        {
            id: 12, img: "https://preview.colorlib.com/theme/pillowmart/img/product/product_list_6.png.webp", name: "Sleeping orthopedic sciatica Back Hip Joint Pain relief", price: 5
        },
        {
            id: 13, img: "https://preview.colorlib.com/theme/pillowmart/img/product/product_list_7.png.webp", name: "Memory foam filling cotton Slow rebound pillows", price: 5
        },
        {
            id: 14, img: "https://preview.colorlib.com/theme/pillowmart/img/product/product_list_8.png.webp", name: "Sleeping orthopedic sciatica Back Hip Joint Pain reliefr", price: 5
        },
        {
            id: 15, img: "https://preview.colorlib.com/theme/pillowmart/img/product/product_list_9.png.webp", name: "Geometric striped flower home classy decor", price: 5
        },

    ]
    const [apis, setApi] = useState([])
    useEffect(() => {
        const selectedProduct = listProducts.find(product => product.id === parseInt(productId));
        setApi([selectedProduct])

    }, [])

    return (
        <div>

            <Header />
            <div style={{
                marginTop: '85px',

            }}>
                <div style={{
                    backgroundColor: '#B08EAD',
                    fontSize: '40px',
                    height: '350px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}>
                    <h3>Product Detail</h3>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }} >
                    {/* vòng lặp */}
                    {apis?.map(listProduct => (

                        <Link className='deltail' to={`/cart/` + listProduct.id}>
                            <div >
                                <img style={{
                                    height: '400px',
                                    width: '100%',
                                }} src={listProduct.img} />

                            </div>
                        </Link>

                    ))}
                    <div>
                        {apis?.map(listProduct => (
                            <Link className='deltail' to={`/cart/` + listProduct.id}>
                                <div>
                                    <div className='productdetail'>
                                        <h3>
                                            {listProduct.name}
                                        </h3>
                                    </div  >
                                    <div className='productdetail'>
                                        {listProduct.price}$
                                    </div>
                                </div>
                            </Link>
                        ))}
                        {apis?.map(discription => (
                            <div className='descrip'> {discription.description}</div>
                        ))}
                        {apis?.map(listProduct => (
                            <Link className='deltail' to={`/cart/` + listProduct.id}>
                                <div className='productdetail'>
                                    Add To Cart
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetails