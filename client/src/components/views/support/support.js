import React from "react";
import SupportRight from "./supportRight"
import SupportLeft from "./supportLeft"
import './support.css'
import { Row, Col } from 'antd';


class support extends React.Component {

    render(){
        return(
            <div className="support" >
                <Row>
                <Col span={12}><SupportLeft/></Col>
    
      
      <Col span={12}><SupportRight/></Col>
    </Row>

            </div>
        )
    }}

export default support;