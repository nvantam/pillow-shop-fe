import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_API_URL } from '../../../config'
import './ProductDetail.css'
function ProductDetails() {
    const { productId } = useParams()
    const [apis, setApi] = useState(null);
    const URL = process.env.REACT_APP_URL;

    useEffect(() => {
        const getdata = async () => {
            const data = await axios.get(`${URL}/getdetail/${productId}`);
            return data;
        }
        getdata().then(res => {
            setApi(res.data);
        })
    }, []);

    const usename = localStorage.getItem("usename");
    const id = localStorage.getItem("id");

    // const location = useLocation()
    const clickAddToCart = (apis) => {
        if (!usename) {
            window.location.href = '/Login';
            return;
        }
        else {
            axios.post(`${URL}/addtocart`, {
                userid: id,
                img: apis.img,
                nameproduct: apis.name,
                productId: apis._id,
                quantity: 1,
                price: apis.price,
                status: false
            })
                .then(() => {
                })
                .catch(error => {
                    console.error("Lỗi khi thêm vào giỏ hàng:", error);
                });
            alert("Thêm vào giỏ hàng thành công!!")
            window.location.href = '/cart/' + id;
        }
    }
    return (
        apis &&
        <div>

            <Header />
            <div className='producdetail_container'>
                <div className='item_producdetail'>
                    <h3>Chi Tiết Sản Phẩm</h3>
                </div>
                <div className='item_listproduct'>

                    <div >
                        <img className='item_img' src={apis.img} />

                    </div>

                    <div>
                        <div>
                            <div >
                                <h3 className='item_name'>
                                    {apis.name}
                                </h3>
                            </div  >
                            <div >
                                {apis.price}đ
                            </div>
                        </div>

                        <div className='descrip'> {apis.description}</div>
                        <button onClick={() => clickAddToCart(apis)} className='explore_now item_button' style={{
                        }}>
                            Thêm Vào Giỏ Hàng
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetails