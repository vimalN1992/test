import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

import LoginForm from './loginForm';


class Main extends Component {
	constructor(props){
		super(props);
		this.state={loading: false}
	}

	componentDidMount(){
		setTimeout(this.LoadingFunc.bind(this), 500);
	}

	LoadingFunc(){
		this.setState({loading: true});
	}

	render() {
		if(!this.state.loading)
		return(
		<div className="container">
			<div style={{display: 'flex', justifyContent: 'center',marginTop:200}}>
			  <div>
			  	<MuiThemeProvider>
				    <CircularProgress size={60} thickness={5} />
				</MuiThemeProvider></div>
			</div>
		</div>
		);
	return (
	  <div className="App">
	      <LoginForm />
	  </div>
	);
	}
}


export default Main;