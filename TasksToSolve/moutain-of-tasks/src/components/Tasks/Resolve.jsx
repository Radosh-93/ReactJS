import React from "react";

export const Resolve = (props) => {
    let e = props.id;
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
                    {input3.map((el, i) => <input className={cls} type="number" key={i}/>)}
                    <button onClick={getSum}>Sum</button>
                    <input style={{display: 'block', marginTop: `5px`}} id={result} type="number"/>
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
                    {input3.map((el, i) => <input type="number" className={cls} placeholder="number" key={i}/>)}
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
                    <input type="number" id={id} onBlur={func3}/>
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
                    <input type="text" id={id} onBlur={average}/>
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
                    <input id="fullName" type="text" style={{width: `350px`}} onBlur={func}/><br/>
                    {input3.map((el, i) => <input className={cls} type="text" key={i}/>)}
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
                    <input type="text" onBlur={bigLetter} id={id} style={{width: `350px`}}/>
                </div>
            )
        }
        case 7: {
            let wordsAmount = () => {
                let elem = getId(id);
                let results = getId(result)
                let arr = elem.value.split(' ');
                let newArr = arr.filter((el) => el !== '');
                results.innerHTML = '' + newArr.length;

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
                results.innerHTML = '' + maxWord.length
            }
            return (
                <div className='solution'>
                    <input type="text" id={id} onBlur={maxWord}/>
                    <p id={result}>0</p>
                </div>
            )
        }
        case 9: {
            const changeFormatDate = (e) => {
                let elem = getId(id);
                elem.value = elem.value.split('.').reverse().join('-');
            }
            return (
                <div className='solution'>
                    <input type="text" onBlur={changeFormatDate} id={id}/>
                </div>
            )
        }
        case 10: {
            let getYearsOld = () => {
                let elem = getId(id);
                let results = getId(result)
                let date = new Date();
                let yearNow = date.getFullYear();
                if (elem.value !== '') {
                    results.style.color = 'black';
                    results.innerHTML = 'You are ' + (yearNow - elem.value) + ' years old';
                } else {
                    results.style.color = 'red';
                    results.innerHTML = 'Enter your year of birth'
                }
            }
            return (
                <div className='solution'>
                    <input type="number" id={id}/>
                    <button onClick={getYearsOld}>Calculate</button>
                    <p id={result}>...</p>
                </div>
            )
        }
        case 11: {
            let getDayOfWeek = () => {
                let elem = getId(id);
                let results = getId(result);
                let elemValue = elem.value;
                if (elemValue) {
					let date = new Date(elemValue.split('.').reverse().join('/'));
					let option = {weekday: 'long'};
					results.innerHTML = 'Day of week: ' + date.toLocaleDateString('en', option);
				}
            }
            return (
                <div className='solution'>
                    <input id={id} type="text" onBlur={getDayOfWeek}/>
                    <p id={result}>Day of week:</p>
                </div>
            )
        }
        case 12: {
            const checkPalindrome = () => {
                let elem = getId(id);
                let results = getId(result);
                let word = elem.value;
                results.innerHTML = (word === word.split('').reverse().join('')) ? "Is palindrome: Yes" : "Is palindrome: No"
            }
            return (
                <div className='solution'>
                    <input type="text" id={id}/>
                    <button onClick={checkPalindrome}>Check word</button>
                    <p id={result}>Is palindrome: </p>
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