import React, { Component } from 'react';
import './NavigationPannel.css';
import Login from './Login';
import Logout from './Logout';
class NavigationPannel extends Component{
  constructor(props){
		super(props);
		this.state={ login : props.login };
		this.state={ logout : props.logout };
		this.state={ isConnected : props.isConnected };
  }
  render(){
    return (
     <nav>
        {this.state.isConnected === true ? 
        <Logout Logout={this.props.Logout} /> : 
        <Login Login={this.props.Login}/> }
     </nav>
   );
 }
}
export default NavigationPannel;
