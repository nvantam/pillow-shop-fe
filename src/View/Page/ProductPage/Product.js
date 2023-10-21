import React, { useState } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { BASE_API_URL } from '../../../config'
import './Product.css'
function Product() {
  const URL = process.env.REACT_APP_URL;

  const [apis, setApis] = useState([])
  useEffect(() => {
    fetch(`${URL}/getproducts`)
      .then(data => {
        return data.json()
      }).then(
        data => setApis(data)
      )
  },[])

  return (
    <div >
      <Header />
      <div style={{
        marginTop: '70px',
        backgroundColor: '#B08EAD',
        height: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          fontSize: '40px',
          color: 'white',
        }}>
          <h3>Sản Phẩm</h3>
        </div>
      </div>
      <div style={{
        marginTop: '150px',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 0,
      }}>
        <div style={{
          width: '80%',
          display: 'flex',
          flexWrap: 'wrap',

          justifyContent: 'space-around',

        }}>
          {/* vòng lặp */}
          {apis.map(listProduct => (
            <Link className='linkproduct' to={`/ProductDetails/` + listProduct._id}>
              <div style={{
                marginTop: '50px',
              }} >
                <img src={listProduct.img} />
                <div className='products' style={{
                  width: '350px',
                }}>
                  <h3>
                    {listProduct.name}
                  </h3>
                </div>
                <div className='products'>
                  Giá {listProduct.price}đ
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product