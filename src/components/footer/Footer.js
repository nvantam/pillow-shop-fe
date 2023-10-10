import React from 'react'
import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons'
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
                <div style={{
                    marginLeft: '-15px',
                }}>
                    <img src='https://preview.colorlib.com/theme/pillowmart/img/logo.png.webp' />
                </div>
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
                        Copyright ©2023 All rights reserved | This template is made with ❤️ by Tâm
                    </i>
                </div>
                <div style={{
                    fontSize: '20px',
                }}>
                    <FacebookOutlined style={{
                        marginRight: '10px'
                    }} />
                    <GooglePlusOutlined />
                </div>

            </div>

        </div>

    )
}

export default Footer