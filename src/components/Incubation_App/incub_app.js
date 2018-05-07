import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../NavigationBar/DrawerNav';
import DataTable from '../common/dataTable';

import { connect } from 'react-redux';



class Incu_App extends Component {
	constructor(props){
		super(props);
		var cat = JSON.parse(localStorage.getItem("user"));
    console.log(cat)
	}	
  render() {
  	if(!this.props.isLogged)
  		return (<Redirect to={{ pathname: '/' }} />);
    return (
      <div>
      	<NavBar />

        <DataTable />
	
      </div>
    );
  }
}

const mapStateToProps = ( Auth ) => {    
    const { isLoggedIn  } = Auth; 
    return {
        isLogged: isLoggedIn
    };
}; 

export default connect(mapStateToProps, null)(Incu_App);
