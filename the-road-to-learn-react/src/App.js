import React from 'react';
import axios from 'axios';
import './App.scss';
import {Test1} from "./examples/conditional";
import {Search} from "./components/Search";
import {Table} from "./components/Table";
import {CompositionApp, WelcomeDialog} from "./examples/Composition";
import {Button} from "./components/Button";

//константы для URL-адреса
const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '10';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

class App extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            searchKey: 'redux',
            searchTerm: DEFAULT_QUERY,
            error: null
        };
        this.onDismiss = this.onDismiss.bind(this); //привязка метода
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
        this.setSearchTopStories = this.setSearchTopStories.bind(this);
        this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this)

    }

    //methods
    onSearchChange(event) {
        this.setState({searchTerm: event.target.value})
    }

    setSearchTopStories(result) {
        const {hits, page} = result;
        const {results, searchKey} = this.state;
        const oldHits = results && results[searchKey] ? results[searchKey].hits : [];
        this.setState({
            results: {
                ...results,
                [searchKey]: {hits: [...oldHits, ...hits], page}
            }
        });

    }

    onSearchSubmit(event) {
        event.preventDefault();
        const {searchTerm} = this.state;
        this.setState({searchKey: searchTerm});
        if (this.needsToSearchTopStories(searchTerm)) {
            this.fetchSearchTopStories(searchTerm);
        }
    }

    onDismiss(id) {
        const {results, searchKey} = this.state;
        const {hits, page} = results[searchKey]
        const updatedHits = hits.filter(item => item.objectID !== id);
        this.setState({
            results: {
                ...results,
                [searchKey]: {
                    hits: updatedHits,
                    page
                }
            }
        });
    }

    needsToSearchTopStories(searchTerm) {
        return !this.state.results[searchTerm]
    }

    fetchSearchTopStories(searchTerm, page = 0) {
        axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(result => this._isMounted && this.setSearchTopStories(result.data))
            .catch(error => this._isMounted && this.setState({error}));
    }

    componentDidMount() {
        this._isMounted = true;

        const {searchTerm} = this.state;
        this.setState({searchKey: searchTerm});
        this.fetchSearchTopStories(searchTerm)
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let helloWorld = `Welcome to the road to learn Reactdff`;
        const keys = ['name', 'lastName']
        let person = {
            [keys[0]]: 'Robin',
            ['last' + 'Name']: 'Wieruch' //идентично как и - lastName: 'Wieruch'
        }

        const {searchTerm, results, searchKey, error} = this.state; //деструктурированное присваивание обьекта

        const page = (results && results[searchKey]) ? results[searchKey].page : 0;
        const list = (results && results[searchKey]) ? results[searchKey].hits : [];
        console.log(results);
        return (
            <div className="App">
                <div className='test-block'>
                    <Test1 status='error'/>
                </div>
                <h2>{helloWorld}</h2>
                <p>by {person.name} {person.lastName}</p>
                <div className='page'>
                    <div className='interactions'>
                        <Search value={searchTerm}
                                onChange={this.onSearchChange}
                                onSubmit={this.onSearchSubmit}
                        >
                            Search
                        </Search>
                        {error
                            ? (<div className='interactions'>
                                <p>Something went wrong...</p>
                            </div>)
                            : (<Table list={list}
                                      onDismiss={this.onDismiss}
                                      page={page} s
                                      earchKey={searchKey}
                                      fetchSearchTopStories={this.fetchSearchTopStories}
                            />)}

                    </div>
                </div>


                {/*Examples*/}
                <hr style={{height: '3px', backgroundColor: 'red'}}/>
                <ExplainBindingsComponent/>
                <WelcomeDialog/>
                <CompositionApp/>
            </div>
        );
    }
}

// Методы привязки к компонеты ()
class ExplainBindingsComponent extends React.Component {
    constructor(props) {
        super(props);
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
