import React, { Component } from 'react';
import {
 Link,
 Route,
 BrowserRouter as Router
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
    onLogout
} from '../../_action/auth.js';



class NavBar extends Component {

   render() {
    
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to='/'>WebSiteName</Link>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <button
                  type="button"
                  onClick={()=>{this.props.onLogout();}}
                  className="btn btn-primary btn-lg"
                >
                  Logout
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
 
const mapStateToProps = ( Auth ) => {    
    const { email, password, loading, error, isLoggedIn  } = Auth; 
    return {
        email,
        password,
        loading,
        error,
        isLogged: isLoggedIn
    };
}; 

export default connect(mapStateToProps, { onLogout })(NavBar);