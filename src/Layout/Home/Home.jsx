import React, { Component } from 'react';
import axios from 'axios';
import TablePag from '../../Components/Table/Table';
import './Home.css';
import Loader from '../../Components/Loader/Loader';
import { conditionalExpression } from '@babel/types';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            page: 0,
            newPage: 0, 
            filter : "",
        };
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount() { 
        let page
        this.props.location == null ? page = this.state.page : page = parseInt(this.props.location.state.page)
        this.setState({page: page}, () => this.callAPI())
    }

    callAPI = () => {
        const KEY = 'DJSMWWb3Ire4KJmZFdkAmo5FGS116cCj';

        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=BE&apikey=`
                    + KEY
                    + `&size=15&page=`
                    + this.state.page )
        .then(
        (result) => {
            let items = this.state.items
            items = result.data._embedded.events
            this.setState({
                isLoaded: true,
                items: items
            });
        },
        (error) => {
            this.setState({
            isLoaded: true,
            error
            });
        }
        )
    }
    
    updatePage = (newPage) => {
        this.setState({page: newPage}, () => this.callAPI(this.state.page))
    }

    handleFilter = (e) => {
        e.preventDefault()
        let filter = e.target.value.toLowerCase()
        this.setState({filter: filter})
    }

    render (){
        const { error, isLoaded, items, filter, page } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loader />;
        } else {
            return (
                <div id="Home">
                    <div className="Header">
                        <h1>On stage</h1>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Search..." 
                            onChange={this.handleFilter} 
                            id="searchBar" 
                        />
                    </div>
                    <div id="Table">
                        <TablePag 
                            items={items} 
                            recherche={this.state.filter}
                            updatePage={this.updatePage}
                            pageInit={page}
                        />
                    </div>
                </div>
            )
        }
    }
}