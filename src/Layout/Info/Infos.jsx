import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import './Infos.css';
import getDate from '../../Util/getDate';
import ChipsArray from '../../Components/Chip/Chip';
import PriceTable from '../../Components/Prices/Prices';
import Button from '../../Components/Button/rectangularButton';
import Fab from '@material-ui/core/Fab';

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
        },
        (error) => {
            this.setState({
            isLoaded: true,
            error
            });
        }
        );
    }

    returnBack = () => {
        let page = this.props.match.params.page
        this.props.history.push({
            pathname: `/${page}`,
            state: { page: page }
        })
    }
    render (){
        const { error, isLoaded, item } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loader />;
        } else {
            return (
            <div id="Infos">
                <div className="Header">
                    <h1>On stage</h1>
                    <Fab 
                        onClick={()=>this.returnBack()}
                        id="closeButton"
                    >
                        <img src="Assets/closeIcon.svg" />
                    </Fab>
                </div>
                { item[0].images.map(image =>
                    image.width === 1136 && <img 
                                                src={image.url} 
                                                alt={item.name} 
                                                id="infosImg" 
                                                key={item.id}
                                            />
                )}
                <div id="InfosContent">
                    <h1 id="InfosName">{item[0].name}</h1>
                    <div id="Lieu">
                        <p id="InfosDate">{getDate(item[0].dates.start.localDate)}</p>
                        <h3 id="InfosPlace">{item[0]._embedded.venues[0].name}</h3>
                        <div id="InfosAddress">
                            <p>
                                {item[0]._embedded.venues[0].address.line1  + ", "}
                                {item[0]._embedded.venues[0].postalCode + " "} 
                                {item[0]._embedded.venues[0].city.name + "."}
                            </p>
                        </div>
                    </div>
                    <div id="InfosChip">
                        <ChipsArray 
                            size='medium'
                            items={item[0].classifications} 
                        />
                    </div>
                    <h4>Prix :</h4>
                    <div id="PriceTableContainer">
                        <PriceTable 
                            prices={item[0].priceRanges}
                        />
                    </div>
                    <h4 id="InfosPrice">
                        {"En vente du " + getDate(item[0].sales.public.startDateTime) + " au " + getDate(item[0].sales.public.endDateTime)}
                    </h4>
                    <Button 
                        link={item[0].url}
                    />
                </div>
            </div>
        )}
    }
}