

import React, {Component} from 'react';
import { Radio,Button } from 'antd';
import Collapsible from 'react-collapsible';
import { USER_SERVER} from '../../../Config'
import {connect} from "react-redux";
import{List,ListItem,ListItemContent,FABButton,Icon}from 'react-mdl'
import {submitPlan} from './submit'
import {  withRouter } from 'react-router-dom'


class Incident extends Component{
    constructor(props) {
        super(props);
        this.state = {
          probability:'',
          degree:'',
          name:this.props.incident,
          users: [],
          responsibles:[],
          admin:this.props.user.userData._id  };
        this.onSubmit = this.onSubmit.bind(this) }
      

      componentDidMount = () => {
        fetch(`${USER_SERVER}/`)
        .then(res=>res.json())
        .then(json=>{
          this.setState({
            users:json,})
        })}
      

      onChangeDegree=(e)=>{
        this.setState({degree:e.target.value}) }

      onChangeProbability=(e)=>{
        this.setState({probability:e.target.value})  }


      onSubmit(e) {
        e.preventDefault()
    
        const newIncident = {
          admin:this.state.admin,
          name: this.state.name,
          probability: this.state.probability,
          degree: this.state.degree,
          responsibles: this.state.responsibles
        }
        submitPlan(newIncident ).then(res => {
          this.props.history.push(`/dashboard`) })
      }
      
     
    render() {

      const{users}=this.state;

        return (
        <div>
            <h1>{this.state.incident}</h1>
            <div>Degree of impact : </div>
              <Radio.Group onChange={this.onChangeDegree}>
              <Radio value="High">High</Radio>
              <Radio value="Medium">Medium</Radio>
              <Radio value="Low">Low</Radio>
              </Radio.Group>
              <div>Probability of ocurre :</div>
              <Radio.Group onChange={this.onChangeProbability}>
              <Radio value="High">High</Radio>
              <Radio value="Medium">Medium</Radio>
              <Radio value="Low">Low</Radio>
              </Radio.Group>
              <br/>
              <Collapsible trigger={<Button  type="primary"> next</Button>}>
              <div>Choose the responsible staff</div>
                <List style={{width: '650px'}}>
          {users.map(user=>{if(this.props.user.userData._id === user.admin)
          return(<ListItem threeLine key={user._id}>
    <ListItemContent avatar={user.image}  subtitle={user.email}>{user.name}</ListItemContent>
    <FABButton  mini onClick={()=>{this.setState({responsibles:this.state.responsibles+user._id})}}> <Icon name="add" /></FABButton>
    </ListItem>

          )})}
</List>

<Button  type="primary" onClick={this.onSubmit}> Submit</Button>

 </Collapsible>

        </div>
        );
      } }


    const mapStateToProps = (state) => {
      return {
        user: state.user } }


    
    export default connect(mapStateToProps) (withRouter(Incident)) ;