import React, { Component } from "react";
import './index.css'
class Switch extends Component {
  state = {
    value: false
  }


  handlerClick = (e) => {
    this.setState({
      value: !this.state.value
    })
    const shift =e.currentTarget
    if(this.state.value){
      shift.style.right ="50px"
      
    } else{
      shift.style.right ="0px"
    }
  }


  render() {
    return (
      <div className="switch">
        <span>关</span>
        <div className="but" onClick={this.handlerClick}></div>
        <span>开</span>
      </div>
    )
  }
}

export default Switch