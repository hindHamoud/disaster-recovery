import React from "react";
import { Input,Avatar,Button } from 'antd';
import supportIcon from "../../photos/support1.png"

class supportRight extends React.Component {

    render(){
        const { TextArea } = Input;
        return(
            <div style={{background:'white',margin:'20px'}}>
                <div style={{margin:'10px'}}>
               
                <h4 style={{textAlign:'center'}}> SECURITY SERVICES SUPPORT </h4>
                <div>If you need help in choosing the right security service for you or running the security service you have chosen, we are happy to serve you.</div>
                <br/>
                
                <div><a href="/security">click here</a> to get more information about security service </div>
                <label>Choose the security service: 
                <select
              value=""
              onChange=""
            >
                <option value="Cloud Access Security Broker (CASB)">Cloud Access Security Broker (CASB)
                </option>
                <option value="Okta">Okta
                </option>
                <option value="Proofpoint">Proofpoint
                </option>
                <option value="White Hat Security">White Hat Security
                </option>
                <option value="Qualys">Qualys
                </option>
                
            </select></label>
            <br/>

            <Input placeholder="your email" style={{width:'300px'}}/>
            <br/>
            <br/>
            <TextArea
        placeholder="Write down your problem or question "
        className="problem"
        style={{
          height: 130,
          width: 300
        }}/>
       <br/>
      <Button style={{width:'100px'}} type="primary" block>
      send
    </Button></div></div>
        )
    }}

export default supportRight;