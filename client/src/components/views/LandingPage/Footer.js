import React from 'react'
import {MailOutlined,PhoneOutlined,EnvironmentOutlined} from '@ant-design/icons';

function Footer() {
    return (
        <div style={{background:'gray'}}>
            <p style={{fontSize:"16px", textDecoration:"underline",fontFamily:""}}>Contact Information:  </p>
        
        <p style={{fontSize:"16px"}}> <MailOutlined style={{fontSize:"20px"}} /> support@recoverly.com </p>
        
        <p style={{fontSize:"16px"}}>  <PhoneOutlined style={{fontSize:"20px"}} />  +966531682593  </p>
        
        
        <p style={{fontSize:"16px"}}> <EnvironmentOutlined style={{fontSize:"20px"}} /> saudi arabia , qassim  </p>
        
        </div>
    )
}

export default Footer
