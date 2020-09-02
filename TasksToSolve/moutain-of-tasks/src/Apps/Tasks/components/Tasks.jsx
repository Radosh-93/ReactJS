import React from "react";
import style from './Tasks.module.css'
import {Resolve} from "./Resolve";
const Tasks = (props) => {
	const pStyle = {
		color: '#5D016D',
		padding: `10px 0`,
		margin: 0
	}
	return (
		<div className={style.mainContainer}>
			<h1>Tasks to solve</h1>
			<a href={props.source} target='_blank' rel='noopener noreferrer'>Source</a>
			{props.tasksData.map(el => (
				<div className={style.container} key={el.id}>
					<p style={pStyle}><b>#{el.id}</b>{` ${el.description}`}</p>
					<Resolve itemId={el.id} data={el.data}/>
				</div>
			))}
		</div>
	)
}
export default Tasks