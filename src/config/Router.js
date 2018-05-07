import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  
} from 'react-router-dom';

import Main from '../components/Login';
import Main_Dashboard from '../components/Dashboard/dashboard';
import Main_Incubation from '../components/Incubation_App/incub_app';
import Main_Enquiry from '../components/index';

const Routers = () => (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/dashboard" component={Main_Dashboard} />
      <Route path="/incub_app" component={Main_Incubation} />
      <Route path="/enquiries" component={Main_Enquiry} />
    </div>
  </Router>
)

export default Routers;