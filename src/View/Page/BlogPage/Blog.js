import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

function Blog() {
  return (
    <div>
      <Header />
      <div style={{
        marginTop: '70px',
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
          <h3>Blog</h3>
        </div>

             </div>
      <Footer />
    </div>
  )
}

export default Blog