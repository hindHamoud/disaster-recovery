import React, {Component} from 'react';
import { Radio,Button } from 'antd';


class Degree extends Component{
    constructor(props) {
        super(props);
        this.state = {
          probability:'',
          degree:'',
        };
      }
      onChangeDegree=(e)=>{
        this.setState({degree:e.target.value})
      }

      onChangeProbability=(e)=>{
        this.setState({probability:e.target.value})
      }




      render() {
          return(
              <div style={{margin:'40px'}}>
                <div>Degree of impact  :</div>
              <Radio.Group onChange={this.onChangeDegree}>
              <Radio value="High">High</Radio>
              <Radio value="Medium">Medium</Radio>
              <Radio value="Low">Low</Radio>
              </Radio.Group>
              <div>Probability of ocurre:</div>
              <Radio.Group onChange={this.onChangeProbability}>
              <Radio value="High">High</Radio>
              <Radio value="Medium">Medium</Radio>
              <Radio value="Low">Low</Radio>
              </Radio.Group>
              <br/>
              <Button  type="primary" > incident A</Button>
              </div>
              
          )}}


export default Degree;