import React, { Component } from 'react'
import {  Avatar } from 'antd';
import { USER_SERVER} from '../../../Config'

class Profile extends Component {
    constructor() {
      super()
      this.state = {
        isLoading: false,
          user: []
      }
    }

  
    componentDidMount = () => {
  fetch(`${USER_SERVER}/auth`)
  .then(res=>res.json())
  .then(json=>{
    this.setState({
      isLoading:true,
      user:json,
    })
  })
   
  }
  
render(){
    const{isLoading,user}=this.state;
    if(!isLoading){
      return <div>Loading...</div>
    }else {return (
      <div className="container" >
          
            <div className="col-sm-8 mx-auto" style={{marginLeft:'90px' ,marginTop:'50px',marginBottom:'20px'}}>
          
              <Avatar size={70} 
                        src={user.image} />
                    </div>
                    <br />


                  <div style={{ textAlign:'center',fontSize:'20px',fontFamily:'apple'}} > 

                  {user.name}
                  </div>
                  <div style={{ textAlign:'center',marginBottom:'20px'}}>
                
                {user.email}
                </div>
        </div>
    );
  }}}
  
  export default Profile
