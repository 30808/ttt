import React, {Component} from 'react'
import './index.css'
class Buttons extends Component {
	aloudList = [
		{
			title: '成功',
			type: 'success'
		},
		{
				title: '失败',
				type: 'fail'
			},
			{
				title: '警告',
				type: 'warning'
			}
		]
	handleType = () => {
		// if (this.props.type == fail) {
		// }
	}
	

	get renderStart () {
		const start = []
			start.push(
				<button
				></button>
			)
		return start
	}
	render () {
		return (
			<div className="wrap">
				{this.renderStart}
			</div>
		)
	}
}

export default Buttons