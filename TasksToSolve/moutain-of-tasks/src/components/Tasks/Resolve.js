import React from "react";

export const Resolve = (e) => {
	let getId = (id) => document.getElementById(id)
	let getCls = (cl) => document.getElementsByClassName(cl)
	let input3 = [1, 3, 3]
	let cls = 'cls' + e
	let id = 'id' + e
	let result = 'result' + e
	switch (e) {
		case 1: {
			let getSum = () => {
				let elements = getCls(cls);
				let results = getId(result);
				let sum = 0;
				for (let i = 0; i < elements.length; i++) {
					sum += Number(elements[i].value);
					elements[i].value = ''
				}
				results.value = sum;
			}
			return (
				<div className='solution'>
					{input3.map((el, i) => <input className={cls} type="number" key={i} />)}
					<button onClick={getSum}>Sum</button>
					<input style={{ display: 'block', marginTop: `5px` }} id={result} type="number" />
				</div>
			)
		}
		case 2: {
			let getSum2 = () => {
				let results = getId(result)
				let elements = getCls(cls)
				let sum = 0;
				for (let i = 0; i < elements.length; i++) {
					sum += Number(elements[i].value);
				}
				results.innerHTML = sum;
			}
			return (
				<div className='solution'>
					{input3.map((el, i) => <input type="number" className={cls} placeholder="number" key={i} />)}
					<button onClick={getSum2}>Click</button>
					<p id={result}>0</p>
				</div>
			)
		}
		case 3: {
			let func3 = () => {
				let element = getId(id);
				element.value = element.value.split('').reduce((p, c) => +p + +c);
			}
			return (
				<div className='solution'>
					<input type="number" id={id} onBlur={func3} />
				</div>
			)
		}
		case 4: {
			let average = () => {
				let element = getId(id)
				let arr = element.value.split(',');
				let sum = arr.reduce((p, c) => +p + +c);
				element.value = (sum / arr.length).toFixed(2);
			}
			return (
				<div className='solution'>
					<input type="text" id={id} onBlur={average} />
				</div>
			)
		}
		case 5: {
			let func = () => {
				let fullName = getId('fullName');
				let elements = getCls(cls);
				let arr = fullName.value.split(' ');
				if (fullName.value !== '') {
					for (let i = 0; i < arr.length; i++) {
						elements[i].value = arr[i]
					}
				} else {
					fullName.placeholder = 'Enter your full name...'
				}
			}
			return (
				<div className='solution'>
					<input id="fullName" type="text" style={{ width: `350px` }} onBlur={func} /><br />
					{input3.map((el, i) => <input className={cls} type="text" key={i} />)}
				</div>
			)
		}
		case 6: {
			let uswords = (str) => {
				let arr = str.split(' ');
				for (let i = 0; i < arr.length; i++) {
					arr[i] = arr[i][0].toUpperCase().concat(arr[i].slice(1))
				}
				str = arr.join(' ');
				return str
			}
			let bigLetter = () => {
				let elem = getId(id);
				elem.value = uswords(elem.value)
			}
			return (
				<div className='solution'>
					<input type="text" onBlur={bigLetter} id={id} style={{ width: `350px` }} />
				</div>
			)
		}
		case 7: {
			let wordsAmount = () => {
				let elem = getId(id);
				let results = getId(result)
				let arr = elem.value.split(' ');
				let newArr = arr.filter((el) => el !== '');
				results.innerHTML = ''+newArr.length;

			}
			return (
				<div className='solution'>
					<input type="text" onBlur={wordsAmount} id={id}/>
					<p id={result}>0</p>
				</div>
			)
		}
		case 8: {
			let chekComma = (arr) => arr.split('').filter((e) => e !== ',').join('');
			let maxWord = () => {
				let elem = getId(id);
				let results = getId(result);
				let arr = elem.value.split(' ');
				let maxWord = '';
				for (let i = 0; i < arr.length; i++) {
					arr[i] = chekComma(arr[i]);
					maxWord = arr[i].length > maxWord.length ? arr[i] : maxWord;
				}
				results.innerHTML = ''+maxWord.length
			}
			return (
				<div className='solution'>
					<input type="text" id={id} onBlur={maxWord}/>
					<p id={result}>0</p>
				</div>
			)
		}
		case 100: {
			return (
				<div className='solution'>

				</div>
			)
		}
		default:
			return (<div>Enter solution</div>)
	}
}