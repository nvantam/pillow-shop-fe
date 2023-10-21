import React from 'react';
import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        
        <div style={{
            height: '100px',
            backgroundColor: '#F4EDF2',
        }}>
            <div style={{
                paddingTop: '250px',
                backgroundColor: 'white',
            }}>
{/* #B08EAD */}
            </div>
            <hr />
            <div style={{
                height: '70px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingTop:'15px',
            }}>
                <Link className='menu_header' to="/">
                <div style={{
                    marginLeft: '-15px',
                }}>
                    <img src='https://preview.colorlib.com/theme/pillowmart/img/logo.png.webp' />
                </div>
                </Link>
                {/* <div style={{
                    textAlign: 'center'
                }}>

                </div> */}
                <div>
                    <i style={{
                        fontSize: '13px',
                        display: 'flex',
                        justifyContent: 'center',
                        marginLeft: '0px',
                    }}>
                       Website Thương Mại Điện Tử by Tâm
                    </i>
                </div>
                <div style={{
                    fontSize: '20px',
                }}>
                   <a href='https://www.facebook.com/profile.php?id=61552477385506'><FacebookOutlined  style={{ marginRight: '10px'}} /></a> 
                    
                </div>

            </div>

        </div>

    )
}

export default Footer