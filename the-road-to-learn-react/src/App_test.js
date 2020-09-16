import React from 'react';
import './App.scss';
import {Test1} from "./examples/conditional";
import {Search} from "./components/Search";
import {Table} from "./components/Table";
import {Button} from "./components/Button";

//константы для URL-адреса
const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '10';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            searchTerm: DEFAULT_QUERY,
            searchKey: ''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.setSearchTopStories = this.setSearchTopStories.bind(this);
        this.onDismiss = this.onDismiss.bind(this)
    }

    //methods
    onSearchChange(e) {
        this.setState({searchTerm: e.target.value})
    }

    setSearchTopStories(result) {
        this.setState({results: {hits: result.hits} })
    }

    onSearchSubmit(e) {
        e.preventDefault();
        this.fetchSearchTopStories(this.state.searchTerm);
    }

    fetchSearchTopStories(searchTerm) {
        this.setState({searchKey: searchTerm})
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}0&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(response => response.json())
            .then(data => this.setSearchTopStories(data))
    }

    onDismiss(id) {
        debugger;
        const isNotId = item => item.objectID !== id
        this.setState({results: {hits: this.state.results.hits.filter(isNotId)}})
    }

    componentDidMount() {
        const {searchTerm} = this.state;
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}0&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(response => response.json())
            .then(data => this.setSearchTopStories(data))
    }

    render() {
        const {searchTerm, searchKey, results} = this.state;
        const list = results && results.hits;
        if(!results) return null
        console.log(results)
        return (
            <div className="App">
                <div className='page'>
                    <div className='interactions'>
                        <Search value={searchTerm}
                                onChange={this.onSearchChange}
                                onSubmit={this.onSearchSubmit}
                        >
                            Search
                        </Search>
                        <Table list={list} onDismiss={this.onDismiss}/>
                        <div className="interaction">
                            <Button onClick={() => (this.fetchSearchTopStories(searchKey))}>
                                More stories
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App2;
