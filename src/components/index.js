import React, { Component } from 'react';
import {
 Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavigationBar/DrawerNav';
import Header from "./Header.js";
import Home from "./Home.js";

class Test extends Component {
    constructor(){
        super();
        this.state = {
            homeLink: 'Home',
        }
    }

    onChangeHome(newName){
        this.setState({
            homeLink: newName
        });
    }

   render() {
    if(!this.props.isLogged)
      return (<Redirect to={{ pathname: '/' }} />);
    return (
      <div className="container">
      <NavBar />
      <div style={{marginTop:20}}></div>
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <i className="fa fa-bar-chart-o fa-fw"></i> 
            All applications for year 2018                            
            <div className="pull-right">Total - 3</div>
          </div>

            <div className="tab-content">  
            <div className=" active in" >
              <a href="" className="list-group-item" data-original-title="" title="">    
                <span style= {{color:'#428bca'}}>In Process Applications</span>
                <span className="badge bg-primary" style={{backgroundColor:'#f0ad4e'}}>3</span>
                <div className="progress progress-mini" style={{marginTop:10}}>
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow=" 100" aria-valuemin="0" aria-valuemax="100" style={{width:300}}>
                  <span className="sr-only"> 100</span>
                </div>
                </div>
              </a>
            </div>
            </div>
            <div className="tab-content">  
            <div className=" active in" >
              <a href="" className="list-group-item" data-original-title="" title="">    
                <span style= {{color:'#428bca'}}>Approved Applications</span>
                <span className="badge bg-primary" style={{backgroundColor:'#5bc0de'}}>3</span>
                <div className="progress progress-mini" style={{marginTop:10}}>
                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow=" 100" aria-valuemin="0" aria-valuemax="100" style={{width:400}}>
                  <span className="sr-only"> 100</span>
                </div>
                </div>
              </a>
            </div>
            </div>
            <div className="tab-content">  
            <div className=" active in" >
              <a href="" className="list-group-item" data-original-title="" title="">    
                <span style= {{color:'#428bca'}}>In Process Applications</span>
                <span className="badge bg-primary" style={{backgroundColor:'#5cb85c'}}>3</span>
                <div className="progress progress-mini" style={{marginTop:10}}>
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow=" 100" aria-valuemin="0" aria-valuemax="100" style={{width:506}}>
                  <span className="sr-only"> 100</span>
                </div>
                </div>
              </a>
            </div>
            </div>
            <div className="tab-content">  
            <div className=" active in" >
              <a href="" className="list-group-item" data-original-title="" title="">    
                <span style= {{color:'#428bca'}}>In Process Applications</span>
                <span className="badge bg-primary" style={{backgroundColor:'#d9534f'}}>3</span>
                <div className="progress progress-mini" style={{marginTop:10}}>
                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow=" 100" aria-valuemin="0" aria-valuemax="100" style={{width:200}}>
                  <span className="sr-only"> 100</span>
                </div>
                </div>
              </a>
            </div>
            </div>  
        </div>
      </div>
      <div className="col-md-6">
                <Header homeLink={this.state.homeLink}/>
                <Home 
                    name={"Max"} 
                    age={28} 
                    onChangeHome={this.onChangeHome.bind(this)} 
                    initialName={this.state.homeLink}
                /> 
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

export default connect(mapStateToProps, null)(Test);
