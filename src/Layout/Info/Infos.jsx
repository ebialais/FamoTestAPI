import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import './Infos.css';
import getDate from '../../Util/getDate';
import ChipsArray from '../../Components/Chip/Chip';
import PriceTable from '../../Components/Prices/Prices';
import Button from '../../Components/Button/Button';

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
                <h3>{item[0]._embedded.venues[0].name}</h3>
                <div id="address">
                    <p>
                        {item[0]._embedded.venues[0].address.line1  + ", "}
                        {item[0]._embedded.venues[0].postalCode + " "} 
                        {item[0]._embedded.venues[0].city.name + "."}
                    </p>
                </div>
                <ChipsArray 
                    items={item[0].classifications} 
                />
                <h4>Prix :</h4>
                <PriceTable 
                    prices={item[0].priceRanges}
                />
                <h4>
                    {"En vente du " + getDate(item[0].sales.public.startDateTime) + " au " + getDate(item[0].sales.public.endDateTime)}
                </h4>
                <Button 
                    link={item[0].url}
                />
                {/* <p> 
                    sur  
                    <a href={item[0].url}>TicketMaster</a>
                </p> */}
            </div>
        )}
    }
}