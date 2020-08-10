import React, { Component } from 'react';
import $ from 'jquery';


class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather: {
                temp: 0,
                desc: ''
            }
        };
    }
    
    componentDidMount(){
        this.getWeather();
    }
    
    componentDidUpdate() {

    }
    
    getWeather(){
        let self = this;
        $.ajax({
            'url': 'https://apis.is/weather/forecasts/is',
            'type': 'GET',
            'dataType': 'json',
            'data': {'stations': '1'},
            'success': function(response) {
                let date = new Date().toISOString();
                let day = date.slice(0,10);
                let time = date.slice(11,13);
                response.results[0].forecast.forEach(function(item){
                    let forecastDate = item.ftime.slice(0,10);
                    let forecastTime = item.ftime.slice(11,13);
                    if(time === forecastTime && day === forecastDate){
                        let desc = item.W.toLowerCase();
                        self.setState({
                            weather: {
                                temp: item.T,
                                desc: desc
                            }
                        })
                    }
                })
            }
        })
    }
    render(){
        const desc = "/images/"+this.state.weather.desc;
        if(this.props.data){

            var cloudy = "/images/"+this.data.props.cloudy;
            var sunCloud = "/images/"+this.data.props.sunCloud;
            var rain = "/images/"+this.data.props.rain;
            var sun = "/images/"+this.data.props.sun; 
            var snow = "/images/"+this.data.props.snow;
        }

        let imgSrc = '/'
        
        if(desc.includes('léttskýjað')){
            imgSrc = sunCloud;
        } else if(desc.includes('ský')){
            imgSrc = cloudy;
        } else if (desc.includes('rigning') || desc.includes('slydda') || desc.includes('skúrir')) {
            imgSrc = rain;
        } else if (desc.includes('snjó')) {
            imgSrc = snow;
        } else if (desc.includes('heiðskírt')) {
            imgSrc = sun;
        }
        
        
        return (
            <div className="weather">
            <div className="weather-heat">{this.state.weather.temp}°</div>
            <img className="weather-image" alt="weather" src={imgSrc}></img>
            <div className="weather-location">Reykjavík</div>
            
            </div>
            )
        }
    }
    
    export default Weather;