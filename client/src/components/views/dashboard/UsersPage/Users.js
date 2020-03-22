import React from 'react';
import {  Button } from 'antd';
import { USER_SERVER} from '../../../Config'
import {connect} from "react-redux";
import{List,ListItem,ListItemContent,ProgressBar}from 'react-mdl'



  class Users extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          isLoading: false,
          users: []
      }
  }



componentDidMount = () => {
  fetch(`${USER_SERVER}/`)
  .then(res=>res.json())
  .then(json=>{
    this.setState({
      isLoading:true,
      users:json,
    })
  })
   
  }
     

    render(){
      const{isLoading,users}=this.state;
      if(!isLoading){
        return <ProgressBar indeterminate />
      }else {return (
        <div style={{height: '300px' }}>
          
      
          <Button type="primary" ><a href="/dashboard/users/add">Add new user</a></Button>
          
      
          
        
  
          <List style={{width: '650px'}}>
          {users.map(user=>{if(this.props.user.userData._id === user.admin)
          return<ListItem threeLine >
    <ListItemContent avatar={user.image}  subtitle={user.email}>{user.name}</ListItemContent>
    </ListItem>})}
</List>
</div>
      );
    }}}
    const mapStateToProps = (state) => {
      return {
        user: state.user
      }
    }
    
    export default connect(mapStateToProps)(Users) ;