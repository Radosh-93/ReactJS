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
            searchTerm: DEFAULT_QUERY,
            results: null,
            searchKey: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.setFetchingData = this.setFetchingData.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.fetchNewData = this.fetchNewData.bind(this)

    }

    onInputChange(event) {
        this.setState({searchTerm: event.target.value})
    }

    onSearchSubmit(event) {
        event.preventDefault();
        const {searchTerm} = this.state;
        this.setState({searchKey: searchTerm})
        this.fetchNewData(searchTerm);

    }

    onDismiss(id) {
        const {results, searchKey} = this.state;
        const updatedResults = results[searchKey].hits.filter(item => item.objectID !== id);
        this.setState({
            results: {
                ...results,
                [searchKey]: {
                    ...results[searchKey],
                    hits: updatedResults
                }

            }
        })
    }

    setFetchingData(data) {
        const {results, searchKey} = this.state;
        const oldHits = results && results[searchKey] ? results[searchKey].hits : [];
        this.setState({
            results: {
                ...results,
                [searchKey]: {hits: [...oldHits, ...data.hits], page: data.page}

            }
        })
    }

    fetchNewData(searchTerm, page = 0) {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(response => response.json())
            .then(data => this.setFetchingData(data))
            .catch(err => err)
    }

    componentDidMount() {
        const {searchTerm} = this.state;
        this.setState({searchKey: searchTerm});
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}0&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(response => response.json())
            .then(data => this.setFetchingData(data))
            .catch(err => err)
    }

    render() {
        const {searchTerm, results, searchKey} = this.state;
        const list = results && results[searchKey] ? results[searchKey].hits : [];
        const page = results && results[searchKey] ? results[searchKey].page : 0;
        if(!results) return null
        console.log(this.state)
        return (
            <div className="App">
                <div className='page'>
                    <div className='interactions'>
                        <Search value={searchTerm}
                                onChange={this.onInputChange}
                                onSubmit={this.onSearchSubmit}
                        >
                            Search
                        </Search>
                        <Table list={list} onDismiss={this.onDismiss}/>
                        <div className="interaction">
                            <Button onClick={() => (this.fetchNewData(searchKey, page + 1))}>
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
