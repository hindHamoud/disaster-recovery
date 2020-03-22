import React from "react";
import { Row, Col } from 'antd';
import { Item } from "rc-menu";

class SecurityI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      security: [],
      type: ""
    };}


  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleChangetype = event => {
    this.setState({ type: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])
      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  }

  componentDidMount() {
    const security = require("./security.json");

    this.setState({ security: security });
  }

  render() {
    const uniqueOne = this.getUnique(this.state.security, "tag");
    const security = this.state.security;
    const type = this.state.type;

    const filterDropdown = security.filter(function(result) {
      return result.tag === type;
    });

    return (
      <div >
          <br />
          <br />
          <div style={{fontSize:'30px',fontFamily:'apple',textAlign:'center'}}>
          security services
          </div>
          <div style={{margin:'20px',background:'rgb(230, 230, 230)'}}>
          <br />
          <label style={{fontSize:'20px',fontFamily:'apple',textAlign:'center',margin:'20px',height:'100%'}}>
            choose type:  <t/>
        
            <select
              value={this.state.type}
              onChange={this.handleChangetype}
            >
              {uniqueOne.map(type => (
                <option key={type.id} value={type.tag}>
                  {type.tag}
                </option>))}
            </select>
          </label>
          
          <Row style={{textAlign:'center'}}>
            {filterDropdown.map(type => (
              <Col style={{background:'rgb(200, 200, 200)'}} span={8}  key={type.id} style={{ margin: "10px" }}>
                <div><img style={{height:'60px', width:'100px'}} src={require(`./image/${type.id}.png`)} /></div>
                <br/>
                <div style={{fontSize:'25px'}}><a href={type.url}>{type.title}</a></div>
                <div style={{fontSize:'15px'}}>{type.description}</div>
                <br />
              </Col>
            ))}
          </Row>
      </div>
      </div>
    );
  }
}

export default SecurityI