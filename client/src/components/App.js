import React, { Suspense } from 'react';
import { BrowserRouter as Router ,Route} from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import RegisterPage from "./views/RegisterPage/RegisterPage.jsx";
import NavBar from "./views/NavBar/NavBar";
import Dashboard from "./views/dashboard/dashboard"
import Add from './views/dashboard/UsersPage/AddPage'






function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Router>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          
          <Route exact path="/dashboard" component={Auth(Dashboard , true)} />
          <Route exact path="/dashboard/users/add" component={Auth(Add , true)} />
        

        </Router>
      </div>
    </Suspense>
  );
}

export default App;
