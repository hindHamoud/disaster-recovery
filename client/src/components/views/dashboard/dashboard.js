import React from "react";

import { Route, Switch, BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import {connect} from "react-redux";
import { Layout, Drawer, Navigation, Content } from "react-mdl";
import { Container, Row } from "react-bootstrap";
import { CommentOutlined, UserOutlined,ReconciliationOutlined } from "@ant-design/icons";



import Users from './UsersPage/Users';
import Chat from '../ChatPage/ChatPage';
import Profile from './Profile/Profile';
import Plan from './DRplan/plan';

const Dashboard = () => {

  return (
    <div style={{ height: "calc(100vh - 60px)", position: "relative" }}>
      <Router>
        <Layout fixedDrawer>
          <Drawer title="Dashboard">
            <Navigation>
              <Profile/>
              <Link to="/dashboard/user">
                <UserOutlined />
                User
              </Link>
              <Link to="/dashboard/chat">
                <CommentOutlined />
                Chat
              </Link>
              <Link to="/dashboard/plan">
              <ReconciliationOutlined />
                Plan
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <Switch>
              <Route path="/dashboard/user">
                <Container>
                  <Row>
                    <Users/>
                  </Row>
                </Container>
              </Route>
              <Route path="/dashboard/chat">
                <Chat/>
                </Route>
                <Route path="/dashboard/plan">
                <Container>
                  <Row>
                    <Plan/>
                  </Row>
                </Container>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(withRouter(Dashboard));
