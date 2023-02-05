import React, { Component } from "react";
import './index.css'
class Fold extends Component {

  state = {
    value:true
  }
  handlerClick = (e) => {
    this.setState({
      value: !this.state.value
    })
    const show = e.currentTarget.nextSibling
    console.log(show)
    if (this.state.value){
      show.style.display = 'block'
    } else {
      show.style.display = 'none'
    }
  }
  
  render() {
    return (
      <div className="fold">
        <ul>
          <li className="lll" onClick={this.handlerClick}>点击我</li>
          <li className="ttt">
            <span>啦啦啦</span>
            <span>突突突</span>
            <span>喵喵喵</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Fold
