// import logo from './logo.svg';
import './App.css';
import Tap from './component/Tap'
import Reat from './component/Reat'
import Number from './component/Number'
import './reset.css'
import React from 'react';
import Switch from './component/Switch'
import Eject from './component/Eject'
import Fold from './component/Fold'



class App extends React.Component {
  state = {
    activeTap: 'a',
    num: 0
  }
  changeTap = (Tap) => {
    this.setState({
      activeTap: Tap
    })
  }
  render() {
    return (
      <>
      <div className="App">
          <Tap activeTap={this.state.activeTap} onChangeTap={this.changeTap} />
          {this.state.activeTap === 'a' && <h2>啦啦啦</h2>}
          {this.state.activeTap === 'b' && <h2>突突突</h2>}
          {this.state.activeTap === 'c' && <h2>嗷嗷嗷</h2>}
      </div>
      <Reat count={10}></Reat>
      <Number></Number>
      <Switch></Switch>
      <Eject></Eject>
      <Fold></Fold>
      </>
    );
  }
}


export default App;
