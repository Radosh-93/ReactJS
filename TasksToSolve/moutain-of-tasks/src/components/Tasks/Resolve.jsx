import React from "react";
import Pic1 from '../../access/img/original.webp'
import Pic2 from '../../access/img/sorrow-2581703_960_720.jpg'

export const Resolve = ({itemId, data}) => {
    let getId = (id) => document.getElementById(id)
    let getCls = (cl) => document.getElementsByClassName(cl)
    let input3 = [1, 3, 3]
    let cls = 'cls' + itemId
    let id = 'id' + itemId
    let result = 'result' + itemId
    switch (itemId) {
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
        case 13: {
            let checkNumber = (e) => {
                let elem = e.target.value;
                let results = getId(result);
                results.innerHTML = elem.split('').some(e => e === '3') ? 'Yes' : 'No'
            }
            return (
                <div className='solution'>
                    <input type="number" onBlur={checkNumber}/>
                    <p>Is number 3 in the input? <span id={result} style={{fontWeight: "bold"}}>...</span></p>
                </div>
            )
        }
        case 14: {
            let addOrderForP = () => {
                let paragraphs = getCls('cls_p');
                for (let i = 0; i < paragraphs.length; i++) {
                    paragraphs[i].innerHTML += ' ' + (i + 1)
                }
            }
            return (
                <div className='solution'>
                    <p className='cls_p'>lorem</p>
                    <p className='cls_p'>lorem</p>
                    <p className='cls_p'>lorem</p>
                    <p className='cls_p'>lorem</p>
                    <button onClick={addOrderForP}>Click</button>
                </div>
            )
        }
        case 15: {
            let addNumbersToInput = () => {
                let paragraphs = getCls(cls);
                let results = getId(result);
                let arr = [];
                for (let i = 0; i < paragraphs.length; i++) {
                    arr.push(paragraphs[i].innerHTML)
                }
                results.value = arr.sort((a, b) => a - b).join(',')
            }
            return (
                <div className='solution'>
                    <p className={cls}>345</p>
                    <p className={cls}>33</p>
                    <p className={cls}>3213</p>
                    <p className={cls}>67</p>
                    <button onClick={addNumbersToInput}>Add to input</button>
                    <input type="text" id={result}/>
                </div>
            )
        }
        case 16: {
            window.onload = () => {
                let elements = getCls(cls);
                for (let i = 0; i < elements.length; i++) {
                    elements[i].innerHTML += `( ${elements[i].href} )`
                }
            }
            return (
                <div className='solution' style={{display: "flex", flexDirection: "column"}}>
                    <a className={cls} href="https://www.google.com">Google</a>
                    <a className={cls} href="https://www.facebook.com">Facebook</a>
                    <a className={cls} href="https://www.youtube.com">Youtube</a>
                </div>
            )
        }
        case 17: {
            window.onload = () => {
                let elements = getCls(cls);
                for (let i = 0; i < elements.length; i++) {
                    if (elements[i].href.includes('http://')) {
                        elements[i].innerHTML += '&rarr;'
                    }
                }
            }
            return (
                <div className='solution' style={{display: "flex", flexDirection: "column"}}>
                    <a href="http://www.google.com" className={cls}>google.com</a>
                    <a href="ftp://facebook.com" className={cls}>facebook.com</a>
                    <a href="https://www.stuckoverflow.com" className={cls}>stuckoverflow.com</a>
                </div>
            )
        }
        case 18: {
            let squaredNumber = (e) => {
                //let elements = getCls(cls)
                e.target.innerHTML *= e.target.innerHTML;
            }
            return (
                <div className='solution' style={{display: "flex"}}>
                    <p className={cls} onClick={squaredNumber}>3</p>
                    <p style={{margin: '16px 5px', cursor: 'pointer'}} className={cls} onClick={squaredNumber}>4</p>
                    <p className={cls} onClick={squaredNumber}>5</p>
                </div>
            )
        }
        case 19: {
            function onloadFun() {
                let elements = getCls(cls);
                for (let i = 0; i < elements.length; i++) {
                    elements[i].addEventListener('click', increaseSize)
                }
            }

            function increaseSize(e) {
                this.width = this.width * 2;
                this.height = this.height * 2;
                this.removeEventListener('click', increaseSize)
                this.addEventListener('click', decreaseSize)
            }

            function decreaseSize() {
                this.width = this.width / 2;
                this.height = this.height / 2;
                this.removeEventListener('click', decreaseSize)
                this.addEventListener('click', increaseSize)
            }

            return (
                <div className='solution'>
                    <img src={Pic1} alt="test"
                         className={cls}
                         onLoad={onloadFun}
                         height='100'
                         width='100'
                         style={{
                             objectFit: 'cover',
                             objectPosition: 'top center',
                             marginRight: '20px'
                         }}/>
                    <img src={Pic2} alt="test"
                         className={cls}
                         onLoad={onloadFun}
                         height='100'
                         width='100'
                         style={{objectFit: 'cover', objectPosition: 'top center'}}/>
                </div>
            )
        }
        case 21: {
            return (
                <div className='solution'>
                    {data.images.map(img => <img src={img} height='30' alt={'anime'}/>)}
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