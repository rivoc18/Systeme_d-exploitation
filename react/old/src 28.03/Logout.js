import React, { Component } from 'react';
//import './Logout.css';
class Logout extends Component{
  constructor(props){
	super(props);
	this.state={ isConnected : props.isConnected };
  }	
  render(){
    return (<form>
        <div>
          <input type="submit" value="deconnexion" onClick={()=>this.props.Logout()}/>
        </div>
      </form>);
    }
  }
export default Logout;
