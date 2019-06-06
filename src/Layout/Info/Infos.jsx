import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import './Infos.css';
import getDate from '../../Util/getDate';
import ChipsArray from '../../Components/Chip/Chip';

export default class Infos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: [],
            images: [],
            id: this.props.match.params.id,
        };
    }
    componentDidMount() { 
        const Key = 'DJSMWWb3Ire4KJmZFdkAmo5FGS116cCj';
        axios.get(`https://app.ticketmaster.com/discovery/v2/events/${this.state.id}.json?apikey=`
                    +Key)
        .then(
        (result) => {
            const item = this.state.item
            item.push(result.data)
            this.setState({
            isLoaded: true,
            item: item
            });
            // this.getImage();
        },
        (error) => {
            this.setState({
            isLoaded: true,
            error
            });
        }
        );
    }
    render (){
        const { error, isLoaded, item } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loader />;
        } else {
            console.log(item[0])
            return (
            <div id="Infos">
                { item[0].images.map(image =>
                    image.width === 1136 && <img 
                                                src={image.url} 
                                                alt={item.name} 
                                                id="infosImg" 
                                                key={item.id}
                                            />
                )}
                <h1>{item[0].name}</h1>
                <p>{getDate(item[0].dates.start.localDate)}</p>
                <ChipsArray 
                    items={item[0].classifications} 
                />
            </div>
        )}
    }
}