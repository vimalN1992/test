import React, { Component } from  "react";
import PropTypes from 'prop-types';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            age: props.age,
            status: 0,
            homeLink: this.props.initialName
        }

        setInterval(() => {
            this.setState({status: 1});
        }, 5000)
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        })
    }

    onChangeHome(){
        this.props.onChangeHome(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        })
    }

    render(){ 
        return(
           <div className="container">
                <p>In a new Component</p> 
                <p>Your name is {this.props.name}, your age is {this.state.age}</p> 
                <p>Status: {this.state.status}</p>
                <button className="btn btn-primary" onClick={() => this.onMakeOlder() }>Make me older</button>
                <p></p> 
                <input 
                    type="text" 
                    value={this.state.homeLink} 
                    onChange={(event) => {this.onHandleChange(event)}}
                />  
                <button 
                    className="btn btn-primary"  
                    onClick={ this.onChangeHome.bind(this) } 
                 >Change Home</button>
            </div>
        );
    };
}

Home.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number, 
    initialName: PropTypes.string
}


export default Home;