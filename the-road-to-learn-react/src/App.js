import React from 'react';
import './App.scss';
import {Test1} from "./examples/conditional";

const list = [
	{
		title: 'React',
		url: 'https://reactjs.org/',
		author: 'Jordan Walke',
		num_comments: 3,
		points: 4,
		objectID: 0,
	},
	{
		title: 'Redux',
		url: 'https://redux.js.org/',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 1,
	}
];

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list,
			isActive: true,
			searchTerm: ''
		};
		this.onDismiss = this.onDismiss.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this)
	}
	onDismiss(id) {
		this.setState({list: this.state.list.filter(item => item.objectID !== id)});
	}
	onSearchChange (event) {
		this.setState({searchTerm: event.target.value})
	}
	render() {
		let helloWorld = `Welcome to the road to learn Reactdff`;
		const keys = ['name', 'lastName']
		let person = {
			[keys[0]]: 'Robin',
			['last' + 'Name']: 'Wieruch' //идентично как и - lastName: 'Wieruch'
		}
		const {list, searchTerm, isActive} = this.state //деструктурированное присваивание обьекта
		return (
			<div className="App">
				<div className='test-block'>
					<Test1 status='error'/>
				</div>
				<h2>{helloWorld}</h2>
				{isActive && <p>by {person.name} {person.lastName}</p>}
				<form>
					<input type="text"
						   onChange={this.onSearchChange}
						   value={searchTerm}/>
				</form>
                <ul>
                    {list.filter(isSearched(searchTerm))
						.map(item => (
                    	<li key={item.objectID}>
		                    <span><a href={item.url}>{item.title}</a></span>
		                    <span>{item.author}</span>
		                    <span>{item.num_comments}</span>
		                    <span>{item.points}</span>
		                    <button type='button' onClick={() => this.onDismiss(item.objectID)}>
			                    Dismiss
		                    </button>
	                    </li>
                    ))}
                </ul>
			{/*Examples*/}
			<hr style={{height: '3px', backgroundColor: 'red'}}/>
				<ExplainBindingsComponent/>
			</div>
		);
	}
}
 // Методы привязки к компонеты ()
class ExplainBindingsComponent extends React.Component {
	constructor() {
		super();
		this.onClickMe = this.onClickMe.bind(this) // #1 привязка в конструкторе (пердпочтительно)
	}
	onClickMe = () => { // #2 привязка с помощью стрелочной функции (т.к она не имеет собсвенный this) иначе обявлять методом
		console.log(this);
	}

	render() {
		return (
			<button
				onClick={this.onClickMe.bind(this)} // #3 привязка в методе рендер (не рекомендуется)
				type="button"
			>
				Click me
			</button>
		);
	}
}

export default App;
