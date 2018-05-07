import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../NavigationBar/DrawerNav';
import {Bar, Pie} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

import { connect } from 'react-redux';

const data1 = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	datasets: [
		{
		  label: 'Dataset',
		  backgroundColor: 'lightblue',
		  borderColor: '#36A2EB',
		  borderWidth: 1,
		  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		  hoverBorderColor: 'rgba(255,99,132,1)',
		  data: [15, 59, 80, 81, 56, 55, 50, 20, 95, 8, 18, 65]
		}
	]
};

const data2 = {
	labels: ['Red', 'Green', 'Yellow'],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
			hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
		}
	]
};


class DashBoard extends Component {
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
	     	<div className="container">
		     	<div className="col-sm-6">
			        <div style={{height:300}} >
			        <h2>Bar Chart</h2>
			        <Bar data={data1} />
			        </div>
			    </div>
			    <div className="col-sm-6">
					<div style={{height:300}} >
						<h2>Doughnut Chart</h2>
					<Pie data={data2} />
					</div>
			    </div>
	      	</div>
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

export default connect(mapStateToProps, null)(DashBoard);
