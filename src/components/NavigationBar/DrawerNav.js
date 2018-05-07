import React from 'react';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

import { connect } from 'react-redux';
import {
    onLogout
} from '../../_action/auth.js';


class Header extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {open: false};
	}
	handleToggle = () => this.setState({open: !this.state.open});
  	handleClose = () => this.setState({open: false});
	
	render(){
		const Logged = (props) => (
		  <IconMenu
		    {...props}
		    iconButtonElement={
		      <IconButton><MoreVertIcon /></IconButton>
		    }
		    targetOrigin={{horizontal: 'right', vertical: 'top'}}
		    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		  >
		    <MenuItem primaryText="Refresh" />
		    <MenuItem primaryText="Help" />
		    <MenuItem onClick={()=>{this.props.onLogout();}} primaryText="Sign out" />
		  </IconMenu>
		);

		Logged.muiName = 'IconMenu';
	return (
		<div className="container">
		  	<MuiThemeProvider>
		  	<div>
				<AppBar
					title={<span>Incubation MIS<sup title="alpha">α</sup></span>}
					onLeftIconButtonClick={this.handleToggle}
					iconElementRight={<Logged />}
				/>
				<Drawer
					docked={false}
					width={250}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
				>
				
					<MenuItem style={{color:'red',fontSize:20,fontWeight:'bold'}}>
						Incubation MIS
						<sup title="alpha">α</sup>
					</MenuItem>
					<Link to="/dashboard" style={{textDecoration: 'none'}}>
						<MenuItem onClick={this.handleClose} >
							<i style={{marginRight:10}} className="fa fa-dashboard fa-fw"></i>Dashboard
						</MenuItem>
					</Link>
					<Link to="/incub_app" style={{textDecoration: 'none'}}>
						<MenuItem onClick={this.handleClose} >
							<i style={{marginRight:5}} className="fa fa-clipboard fa-fw"></i> Incubation Applications
						</MenuItem>
					</Link>
					<Link to="/enquiries" style={{textDecoration: 'none'}}>
						<MenuItem onClick={this.handleClose} >
							<i style={{marginLeft:8,marginRight:15}} className="fa fa-info"></i>Enquiries
						</MenuItem>
					</Link>
					
				</Drawer>
			</div>
		  	</MuiThemeProvider>
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

export default connect(mapStateToProps, { onLogout })(Header);