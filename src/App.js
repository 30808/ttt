// import logo from './logo.svg';
// import './App.css';
import Tap from './Tap'
import Reat from './component/Reat'
import './tap.css'
import './reset.css'
import React from 'react';



class App extends React.Component {
  state = {
    activeTap: 'a'
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
      </>
    );
  }
}


export default App;
