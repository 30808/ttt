import React, {Component} from 'react'
class Number extends Component {

	state = {
		num: 1
	}

	handleClickDcrease = () => {
		this.setState({
			num: this.state.num - 1
		})
	}
	handleClickIncrease = () => {
		this.setState({
			num: this.state.num + 1
		})
	}
	render () {
		return (
			<div>
				<button onClick={this.handleClickDcrease}>-</button>
				<input value={this.state.num} onChange={(e) => {
					this.setState({
						num: e.target.value
					})
				}}></input>
				<button onClick={this.handleClickIncrease}>+</button>
			</div>
		)
	}
}

export default Number