// import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const generateCls = (active, current) => {
	return current === active ? 'nav-link active' : 'nav-item'
}


const Tabs = ({activeTap, onChangeTap}) => {
	console.log(activeTap, onChangeTap)
	return (
		<ul className="nav-tabs">
        <li className="nav-item">
					<a className={generateCls(activeTap, 'a')} onClick={() => {
						onChangeTap('a')
					}}>星期一</a>
					</li>
				<li className="nav-item">
					<a className={generateCls(activeTap, 'b')} onClick={() => {
						onChangeTap('b')
					}}>星期二</a>
				</li>
				<li className="nav-item">
					<a className={generateCls(activeTap, 'c')} onClick={() => {
						onChangeTap('c')
					}}>星期三</a>
				</li>
		</ul>
	)
}

Tabs.propTypes = {
	activeTap: PropTypes.string.isRequired,   // isRequired  必传
	onChangeTap: PropTypes.func.isRequired
}
export default Tabs