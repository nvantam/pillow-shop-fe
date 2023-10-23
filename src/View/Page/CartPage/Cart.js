import React, { useEffect, useState, useMemo, useParams, useRef } from 'react';
import { CloseSquareOutlined } from '@ant-design/icons';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CartPage/Cart.css'

function Cart() {
    const [initialValues, setInitialValues] = useState([]);
    const [initialValuebytts, setInitialValuebytt] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const URL = process.env.REACT_APP_URL;
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [adress, setAdress] = useState("")
    const [detail_adress, setdetail_adress] = useState("")
    const userId = localStorage.getItem("id");

    // const { userCartId } = useParams()
    useEffect(() => {
        // Define an async function to get data for the main list
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL}/getlisttocart/${userId}`);
                setInitialValues(response.data);
            } catch (error) {
                // Handle any errors, e.g., set an error state.
                console.error("Error fetching main list data:", error);
            }
        };
    
        // Define another async function to get data for the secondary list
        const fetchDataByTT = async () => {
            try {
                const response = await axios.get(`${URL}/getlisttocartbytt/${userId}`);
                setInitialValuebytt(response.data);
            } catch (error) {
                // Handle any errors, e.g., set an error state.
                console.error("Error fetching secondary list data:", error);
            }
        };
    
        // Call the data-fetching functions in parallel using Promise.all
        Promise.all([fetchData(), fetchDataByTT()])
            .then(() => {
                // Do something after both requests have completed (optional).
                // window.location.reload()
            })
            .catch((error) => {
                // Handle any errors that occur while fetching the data.
                console.error("Error in Promise.all:", error);
            });
    
        // Make sure to include all dependencies in the dependency array.
    }, []);


    const total = useMemo(() => {
        return selectedProducts.length !== 0
            ? selectedProducts.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0)
            : 0;
    }, [selectedProducts]);

    const handleOnchangeCheckox = (e, selectedProduct) => {
        if (e.target.checked) {
            setSelectedProducts([...selectedProducts, selectedProduct]);
            return selectedProducts;
        } else {
            setSelectedProducts(selectedProducts.filter((item) => item._id !== selectedProduct._id));
            return false;
        }
    };

    const handleUpdateAmount = async (type, id) => {
        const newValues = initialValues.map((item) => {
            if (item._id === id) {
                return {
                    ...item,
                    quantity: type === 'INCREASE' ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : 1,
                };
            }
            return item;
        });
        const updatedProduct = newValues.find((item) => item._id === id)
        await axios.put(`${URL}/updatecart/${id}`, {
            newQuantity: updatedProduct.quantity
        })

        setInitialValues(newValues);
        let newSelectedProducts = [...selectedProducts];
        selectedProducts.forEach((item) => {
            newValues.forEach((newItem) => {
                if (item._id === newItem._id) {
                    item.quantity = newItem.quantity;
                }
            });
        });
        setSelectedProducts(newSelectedProducts);
    };

    const handleDeleteProduct = async (id) => {
        const newValues = initialValues.filter((item) => item._id !== id);
        await axios.delete(`${URL}/deletecart/${id}`)
        // handleOnchangeCheckox()
        setInitialValues(newValues);

    }
    const handlePay = async () => {
        // window.location.href = '/Pay';
        if (selectedProducts.length == 0) {
            alert("Vui lòng chọn sản phẩm")
            return;
        }
        setIsLoad(true);



    };
    const handleCloseDialog = () => {
        setIsLoad(false);
    }
    //khai baos ddawj tắt model
    const [isLoad, setIsLoad] = useState(false)

    //xử lý đặt hàng
    const handerDatHang = async () => {
        var check = document.getElementById("myCheckbox").checked;
        var check1 = document.getElementById("myCheckbox1").checked;
        if (name === "" ||
            number === "" ||
            adress === "" ||
            detail_adress === "" ||
            (check === false && check1 === false)) {
            alert("Vui lòng nhập đủ thông tin!!!")

        }
        else {
            await axios.post(`${URL}/thanhtoan`, {
                product: selectedProducts
            })
                .then(() => {
                    alert('Đặt hàng thành công!!')
                    window.location.reload();
                })
        }
    }

    return (
        initialValues &&
        <div>
            <Header />
            <div>
                <div style={{
                    backgroundColor: '#B08EAD',
                    fontSize: '40px',
                    height: '250px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginTop: '70px'
                }}>
                    <h4>Giỏ Hàng</h4>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '70px',
                    marginLeft: '-170px',
                }}>
                    <h4>
                        Sản Phẩm
                    </h4>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                        <h4 style={{
                            marginLeft: '-350px',
                        }} >
                            Giá
                        </h4>
                        <h4 style={{
                            position: 'relative',
                            left: '100px',
                        }}>
                            Số Lượng
                        </h4>
                        <h4 style={{
                            position: 'relative',
                            left: '170px',
                        }} >
                            Tổng Tiền
                        </h4>
                        <h4 style={{
                            position: 'relative',
                            right: '-230px',
                        }} >
                            Thao Tác
                        </h4>
                    </div>
                </div>
                <hr style={{ width: '75%' }} />
                <div style={{
                    marginTop: '10px',
                    alignItems: 'center',
                }} >

                    <div >
                        {initialValues?.map(initialValue => (
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                // textAlign: 'center',
                                flexDirection: 'row',
                                marginTop: '15px',
                                // width: '82%'
                                // marginLeft: '100px'
                            }}>
                                <input
                                    type="checkbox"
                                    style={{
                                        position: 'relative',
                                        left: '130px'
                                    }}
                                    onChange={(e) => handleOnchangeCheckox(e, initialValue)}
                                />
                                <img style={{
                                    width: '150px',
                                    border: '1px solid #DDDDD',
                                    marginLeft: '0px'
                                }} src={initialValue.img} />
                                <div style={{
                                    width: '300px',
                                    marginLeft: '-140px',
                                    textAlign: 'left',
                                }}>
                                    {initialValue.nameproduct}
                                </div>
                                <div style={{
                                    width: '40px',
                                    marginLeft: '-120px',
                                    textAlign: 'center',

                                }}  >
                                    {initialValue.price}đ
                                </div>
                                <div style={{
                                    width: '70px',
                                    position: 'relative',
                                    left: '-25px'
                                }}  >
                                    <button onClick={async () => await handleUpdateAmount('DECCREASE', initialValue._id)}>-</button>
                                    <span>{initialValue.quantity}</span>
                                    <button onClick={async () => await handleUpdateAmount('INCREASE', initialValue._id)}>+</button>
                                </div>
                                <div>
                                    <div style={{
                                        width: '46px',
                                        position: 'relative',
                                        textAlign: 'left',
                                        left: '-85px'
                                    }}>
                                        {initialValue.quantity * initialValue.price}đ
                                    </div>
                                </div>
                                <button onClick={async () => await handleDeleteProduct(initialValue._id)} style={{
                                    position: 'relative',
                                    left: '-120px'
                                }}>xoá</button>

                            </div>
                        ))}

                    </div>
                </div>
                <br />
                <div style={{
                    display: 'flex',
                    justifyContent: "flex-end",

                }}>
                    <span style={{
                        position: 'relative',
                        left: '-248px',
                    }} >
                        {total}đ
                    </span>

                    <button style={{
                        backgroundColor: '#B08EAD',
                        fontSize: '18px',
                        position: 'relative',
                        left: '-183px',
                        color: 'white',
                        border: '1px solid gray',
                        borderRadius: '8px',

                    }} onClick={() => handlePay()} >
                        <div href="#my-didivlog" className='calldialog' >Thanh toán</div>
                    </button>

                </div>
                <hr style={{ width: '75%' }} />
                <div style={{
                    padding: '30px',
                    fontSize: '27px',
                    fontWeight: 600,
                    marginTop: '50px',
                    textAlign: 'center'
                }}>
                    Sản phẩm đã thanh toán
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    // marginTop: '70px',
                    marginLeft: '-170px',
                }}>
                    <h4>
                        Sản Phẩm
                    </h4>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',

                    }}>
                        <h4 style={{
                            marginLeft: '-280px',
                        }} >
                            Giá
                        </h4>
                        <h4 style={{
                            position: 'relative',
                            left: '100px',
                        }}>
                            Số Lượng
                        </h4>
                        <h4 style={{
                            position: 'relative',
                            left: '170px',
                        }} >
                            Tổng Tiền
                        </h4>

                    </div>
                </div>

                <hr style={{ width: '75%' }} />

                <div style={{
                    marginTop: '10px',
                    alignItems: 'center',
                }} >

                    <div >
                        {initialValuebytts?.map(initialValue => (
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                // textAlign: 'center',
                                flexDirection: 'row',
                                marginTop: '15px',
                                // width: '82%'
                                // marginLeft: '100px'
                            }}>

                                <img style={{
                                    width: '150px',
                                    border: '1px solid #DDDDD',
                                    marginLeft: '100px'
                                }} src={initialValue.img} />
                                <div style={{
                                    width: '300px',
                                    marginLeft: '-140px',
                                    textAlign: 'left',
                                }}>
                                    {initialValue.nameproduct}
                                </div>
                                <div style={{
                                    width: '40px',
                                    marginLeft: '-75px',
                                    textAlign: 'center',

                                }}  >
                                    {initialValue.price}đ
                                </div>
                                <div style={{
                                    width: '70px',
                                    position: 'relative',
                                    left: '-25px'
                                }}  >
                                    <span>{initialValue.quantity}</span>
                                </div>
                                <div style={{
                                    width: '70px',
                                    position: 'relative',
                                    left: '-50px'
                                }}  >
                                    <div style={{
                                        width: '46px',
                                        position: 'relative',
                                        textAlign: 'left',
                                        left: '-85px'
                                    }}>
                                        {initialValue.quantity * initialValue.price}đ
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
                <hr style={{ width: '75%' }} />


                {isLoad &&
                    <div style={{
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        top: 0
                    }}>
                        <div style={{
                            width: '700px',
                            height: '500px',
                            backgroundColor: 'white',
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            overflow: 'scroll'
                        }}>
                            <span style={{ textAlign: 'center', color: 'red' }}><h3>Thanh Toán</h3> </span>

                            <h4 style={{ marginBottom: '10px', color: 'red' }}> Địa chỉ nhận hàng </h4>
                            <input type="text" placeholder="Nhập tên của bạn" onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="Nhập số điện thoại" onChange={(e) => setNumber(e.target.value)} />
                            <input type="text" placeholder="Địa chỉ-Tỉnh-Thành Phố" onChange={(e) => setAdress(e.target.value)} />
                            <input type="text" placeholder="Số nhà cụ thể" onChange={(e) => setdetail_adress(e.target.value)} />

                            <div>
                                <div onClick={handleCloseDialog} style={{
                                    position: 'absolute',
                                    right: '6px',
                                    top: '2px',

                                }}><CloseSquareOutlined style={{ fontSize: '20px' }} /></div>

                                <table style={{ border: '1px solid black', width: '100%', marginTop: '20px' }}>
                                    <thead style={{
                                        border: '1px solid black'
                                    }}>
                                        <tr style={{ border: '1px solid black', color: 'black', fontSize: '16px' }}>
                                            <th style={{ textAlign: 'left' }} > Sản phẩm</th>
                                            <th></th>
                                            <th style={{ color: 'gray' }}>Đơn giá</th>
                                            <th style={{ color: 'gray' }}>Số lượng</th>
                                            <th style={{ color: 'gray' }}>Thành tiền</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {selectedProducts.map(selectedProduct => (

                                            <tr style={{
                                                textAlign: 'left',
                                            }} key={selectedProduct.id}>
                                                <td>
                                                    <img style={{ width: '100px' }} src={selectedProduct.img} alt="Product" />
                                                </td>
                                                <td style={{ width: '250px' }}>{selectedProduct.nameproduct}</td>
                                                <td style={{
                                                    textAlign: 'center',
                                                }}>{selectedProduct.price}</td>
                                                <td style={{
                                                    textAlign: 'center',
                                                }}>{selectedProduct.quantity}</td>
                                                <td style={{
                                                    textAlign: 'center',
                                                }}>{selectedProduct.quantity * selectedProduct.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>


                            </div>
                            <div>
                                <div style={{ color: 'red' }}>
                                    <h4>Phương thức thanh toán</h4>
                                </div>
                                {/* <div>Chọn phương thức</div> */}
                                <input type="radio" id="myCheckbox" name="myCheckbox" ></input>
                                <img style={{ width: '20px', position: 'relative', top: '3px' }} src='https://cdn.airpay.vn/images_v1/c134/icon_c13401_v001.png' /> <span style={{ position: 'relative', top: '-3px' }}>Vietcombank</span>
                                <div>
                                    <input type="radio" id="myCheckbox1" name="myCheckbox" ></input>
                                    <span>Thanh toán khi nhận hàng</span>
                                </div>
                            </div>
                            <div>
                                <span style={{ position: 'absolute', right: '100px' }}>Tổng tiền {total}đ </span>
                                <button style={{ color: 'red', position: 'absolute', right: '6px' }} onClick={() => handerDatHang()}>Đặt Hàng</button>
                            </div>
                        </div>
                    </div>

                }
            </div>


            <Footer />
        </div>
    )
}

export default Cart