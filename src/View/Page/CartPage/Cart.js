import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { Link, useParams } from 'react-router-dom'
function Cart() {
    const { productId } = useParams()
    const listProducts = [
        {
            id: 1, img: "https://preview.colorlib.com/theme/pillowmart/img/tranding_item/tranding_item_1.png.webp", name: "Cervical pillow for airplane car office nap pillow", price: 5
        },
        {
            id: 2, img: "https://preview.colorlib.com/theme/pillowmart/img/tranding_item/tranding_item_2.png.webp", name: "Foam filling cotton slow rebound pillows", price: 5
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
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '100px',
                    alignItems: 'center',
                }}>
                    <div>
                        Product
                    </div>
                    <div >
                        Price
                    </div>
                    <div>
                        Quality
                    </div>

                    <div>
                        Total
                    </div>

                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '100px',
                    alignItems: 'center',
                    flexDirection: 'row'
                }} >
                    {/* vòng lặp */}
                    {apis?.map(listProduct => (
                        <div style={{
                            display: 'flex'
                        }}>
                            <div>
                                <img src={listProduct.img} />
                                <h3>
                                    {listProduct.name}
                                </h3>
                            </div>
                            <div >
                                <div>
                                    From {listProduct.price}$
                                </div>
                            </div>
                        </div>

                    ))}

                    {/* <div>
                        360
                    </div> */}
                    <div>
                        <MinusOutlined />  1 <PlusOutlined />
                    </div>
                    {/* <div>
                        360
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart