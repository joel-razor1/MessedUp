import React, { Component } from "react";
import './index.css'
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { Icon } from 'antd' ;
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import {Link} from "react-router-dom"
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {Redirect} from "react-router-dom"
import createHistory from "history/createBrowserHistory"

const history = createHistory()


const recentsIcon = <Icon type="home" /> ;
const favoritesIcon = <Icon type="edit" /> ;
const nearbyIcon = <Icon type="setting" /> ;

export default class  extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedIndex: 0,
    }
  }
  select = (index) => {this.setState({selectedIndex: index});
  //this.props.history.push('/login')
  console.log('sdfdsfdsf',this.props)
}
  render() {
if(this.state.selectedIndex===0){
return(
 <Redirect to="/"/>
  )
} 
if(this.state.selectedIndex===1){
  return(
    <Redirect to="/usercuts"/>
  )
} 
if(this.state.selectedIndex===2){
  return(
    <Redirect to="/settings"/>
  )
} 
    return (
      <div className="" >
      <Paper zDepth={1} className="bottomtab" style={{paddingLeft:"0px"}}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Home"
              icon={recentsIcon}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Mess Cuts"
              icon={favoritesIcon}
              onClick={() => this.select(1)}
            />
             <BottomNavigationItem
              label="Settings"
              icon={nearbyIcon}
              onClick={() => this.select(2)}
            />
         
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}
