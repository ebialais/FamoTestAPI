import React, { Component } from 'react';
import axios from 'axios';
import TablePag from '../../Components/Table/Table';
import './Home.css';
import Loader from '../../Components/Loader/Loader';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            page: 0,
            newPage: 0, 
            filter : " ",
            isFiltered : false,
            totalPages : 0
        };

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
                + this.state.page 
                +`&keyword=`
                + this.state.filter)
        .then(
        (result) => {
            // let items = this.state.items
            if (!result.data._embedded) {
                this.setState({
                    items : [
                        // "Désolé nous n'avons pas trouvé de resultat cncernant votre recherche"
                    ],
                    isLoaded : true,
                    totalPages: 0,
                })
            } else {
                // items = result.data._embedded.events
                this.setState({
                    isLoaded: true,
                    items: result.data._embedded.events,
                    totalPages : result.data.page.totalPages
                });
            }
        },
        (error) => {
            this.setState({
            isLoaded: true,
            error
            });
        })
    }

    updatePage = (newPage) => {
        this.setState({page: newPage}, () => this.callAPI(this.state.page))
    }

    changeFilter = (e) => {
        // e.preventDefault()
        let filter = e.target.value.toLowerCase()
        this.setState({
            filter: filter,
            page: 0,
            // isFiltered: true,
        }, ()=>console.log("changes done", this.state))
    }
    
    submitFilter = (e) => {
        e.preventDefault();
        console.log("submit")
        this.callAPI()
    }

    render (){
        const { error, isLoaded, items, filter, page } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loader />;
        } else {
            console.log(this.state)
            return (
                <div id="Home">
                    <div className="Header">
                        <h1>On stage</h1>
                        <form onSubmit={(e) => this.submitFilter(e)}>
                            <input 
                                type="text" 
                                className="input" 
                                placeholder="Search..." 
                                onChange={(e) => this.changeFilter(e)}
                                id="searchBar" 
                            />
                        </form>
                    </div>
                    <div id="Table">
                        <TablePag 
                            items={items} 
                            totalPages={this.state.totalPages}
                            updatePage={this.updatePage}
                            pageInit={page}
                        />
                    </div>
                </div>
            )
        }
    }
}