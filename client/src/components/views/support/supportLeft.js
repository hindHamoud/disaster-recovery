import React from "react";
import { Input,Avatar,Button } from 'antd';
import supportIcon from "../../photos/support1.png"

class supportLeft extends React.Component {

    render(){
        const { TextArea } = Input;
        return(
            <div style={{background:'white',margin:'20px'}}>
                <div style={{margin:'10px'}}>
                <h4 style={{textAlign:'center'}}>PRODUCTS & TECHNICAL SUPPORT </h4>
                <div>If you encounter any problem or error or have any questions in dealing with the site, we are happy to receive your request and serve you as soon as possible.</div>
                <br/>

            <Input placeholder="your email" style={{width:'300px'}} />
            <br/>
            <br/>
            <TextArea
        placeholder="Write down your problem or question "
        className="problem"
        style={{
          height: 130,
          width: 300
        }}
      />
      <br/>
      <Button style={{width:'100px'}} type="primary" block>
      send
    </Button></div></div>
        )
    }}

export default supportLeft;