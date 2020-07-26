import React, { useState, useEffect } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import { Grid } from '@material-ui/core';
import './CardGrid.css';

interface IState {
    icon: any;
    main: any;
    description: any;
    temp: any;
}

interface ICardGridProps{
    SearchQuery: (string | null);
}

function CardGrid(props: ICardGridProps){
    const [Item, setItem] = useState<IState>({icon: "", main: "", description: "", temp: ""});


    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + props.SearchQuery + '&appid=')
            .then(response => response.json())
            .then(response => {
                setItem({icon: response.weather[0].icon, main: response.weather[0].main, description: response.weather[0].description, temp: response.main.temp})
            })
            .catch(() => console.log("didn't find the data")
        );
            
    }, [props.SearchQuery]);

    return (
        <div>
            
            <Grid item className = 'CardGridItem'>
                <WeatherCard IconUrl={'http://openweathermap.org/img/wn/10n@2x.png'} City={props.SearchQuery} Main={"Rain"} Description={"moderately rain"} Temp={"289"}/>
            </Grid>
        </div>
    )
}

export default CardGrid