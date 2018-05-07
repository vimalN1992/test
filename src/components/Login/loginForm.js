import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import validateInput from '../Validation/loginValidation';
import TextFieldGroup from '../common/TextFieldGroup';

import { connect } from 'react-redux';
import {
    onSubmit
} from '../../_action/auth.js';

 
class LoginForm extends Component {
 constructor(props) {
    super(props);
    this.state = {
      email:'', password:'', errors:{}
    };
    var cat = JSON.parse(localStorage.getItem("user"));
    console.log(cat)
  }

  onChangeField = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  }

  isValid(){
    const {errors, isValid} = validateInput(this.state);
    if(!isValid){
      this.setState({ errors });
    }else{
      this.setState({ errors:{
        email:'', password:''
      } });
    } 

    return isValid;
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.isValid()){  
      this.props.onSubmit(this.state);
    }
  }

  render() {
    const {errors} = this.state;
    
    if((this.props.isLogged) && (this.props.error === ""))
        return (<Redirect to={{ pathname: '/dashboard' }} />);
    return (
     <div className="container">
      <div className="row">
            <div className="col-md-4 col-md-offset-4" style={{marginTop:'10%'}}>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Please Sign In</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmitForm}>

                        <TextFieldGroup
                          error={errors.email}
                          placeholder="Email"
                          onChange = {this.onChangeField}
                          value={this.state.email}
                          field="email"
                          type="Text"
                        />

                        <TextFieldGroup
                          error={errors.password}
                          placeholder="Password"
                          onChange = {this.onChangeField}
                          value={this.state.password}
                          field="password"
                          type="password"
                        />                    
                <div style={{color:'red',paddingBottom:8}}>{this.props.error}</div>
                <button disabled={this.props.loading} className="btn btn-primary btn-lg">Login </button>

                </form>    
                    </div>
                </div>
            </div>
        </div>
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

export default connect(mapStateToProps, { onSubmit })(LoginForm);