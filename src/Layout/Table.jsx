import React, { Component } from 'react';
import axios from 'axios';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get("https://api.harvardartmuseums.org/object?apikey=d38321d0-86e5-11e9-bda2-e983fc9d1a44")
            .then(
            (result) => {
                const items = this.state.items
                items.push(result.data)
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

    render (){
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(this.state.items)
            return (
                
                <div id="Table">
                    Mon tableau
                </div>
            )
        }
    }
}