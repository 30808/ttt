import React from 'react'
import './index.css'
import classname from 'classname'
class Reat extends React.Component {
  state = {
		hoverIndex: -1,
		activeIndex: -1
	}
	// handle这个是自己的约定
	handleMouseover = (i) => {
		this.setState({
			hoverIndex: i
		})
	}
	handleClickSelect = (i) => {
		this.setState({
			activeIndex: i
		})
	}
	handleMouseout = () => {
		this.setState({
			hoverIndex: -1
		})	
	}
	get renderStart () {
		const start = []
		for (let i=0; i<this.props.count; i++) {
			// start.push(
			// 	<i 
			// 	key={i}
			// 	className={
			// 		i <= this.state.hoverIndex ? 'hover' : ''
			// 	}
			// 	onMouseEnter={(e) => this.handleMouseover(i)}
			// 	onMouseEnter={(e) => this.handleClickSelect(i)}
			// 	></i>
			// )
			start.push(
				<i 
				key={i}
				className={ classname({
					hover: i <= this.state.hoverIndex,
					active: i <= this.state.activeIndex,
				})
				}
				onMouseEnter={(e) => this.handleMouseover(i)}
				onClick={(e) => this.handleClickSelect(i)}
				></i>
			)
		}
		return start
	}
	render() {
		return (
			<div className="wrap"
			onMouseLeave={this.handleMouseout}
			>{this.renderStart}</div>
		)
	}
}


export default Reat