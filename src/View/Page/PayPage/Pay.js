import React from 'react';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';

function Pay() {
    return (
        <div>
            <Header />
            <div style={{
                marginTop: '70px',
                backgroundColor: '#B08EAD',
                height: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{
                    fontSize: '40px',
                    color: 'white',
                }}>
                    <h3>Thanh Toán</h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pay