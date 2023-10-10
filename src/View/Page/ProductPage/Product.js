import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { Link } from 'react-router-dom'
import './Product.css'
function Product() {

  const listProducts = [
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

  return (
    <div >
      <Header />
      <div style={{
        marginTop: '90px',
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
          <h3>Product List</h3>
        </div>
      </div>
      <div style={{
        marginTop: '150px',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 0,
      }}>
        <div style={{
          width: '87%',
          display: 'flex',
          flexWrap: 'wrap',

          justifyContent: 'space-around',

        }}>
          {/* vòng lặp */}
          {listProducts.map(listProduct => (
            <Link className='linkproduct' to={`/ProductDetails/` + listProduct.id}>
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
                  From {listProduct.price}$
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