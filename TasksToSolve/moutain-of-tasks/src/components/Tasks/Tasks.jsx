import React from "react";
import './Tasks.css'
import {Resolve} from "./Resolve";
const Tasks = (props) => {
	const pStyle = {
		color: '#5D016D',
		padding: `10px 0`,
		margin: 0
	}
	return (
		<div>
			<h1>Tasks to solve</h1>
			<a href={props.source} target='_blank' rel='noopener noreferrer'>Source</a>
			{props.tasksData.map(el => (
				<div className="container" key={el.id}>
					<p style={pStyle}><b>#{el.id}</b>{` ${el.description}`}</p>
					<Resolve itemId={el.id} data={el.data}/>
				</div>
			))}
		</div>
	)
}
export default Tasks