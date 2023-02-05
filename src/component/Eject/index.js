import React, { Component } from 'react'
import './index.css'
class Eject extends Component {
  state = {
    value: true
  }

  handlerClick = (e) => {
    this.setState({
      value: !this.state.value
    })
    const show = e.currentTarget.nextSibling
    if (this.state.value) {
      show.style.display = 'block'
    } else {
      show.style.display = 'none'
    }
  }
  render() {
    return (
      <div className="eject">
        <div className="box">
          <div className="lll" onClick={this.handlerClick}>点击我</div>
          <div className="ttt">我出来了</div>
        </div>
      </div>
    )
  }
}
export default Eject