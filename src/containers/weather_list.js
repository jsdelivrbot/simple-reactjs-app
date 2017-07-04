import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index'

class WeatherDetails extends Component {

    renderWeatherInfo() {
    return _.map(this.props.weatherlist, weather => {
      return (
            <tr scope="row">
                <td>{weather.dt}</td>
                <td>{weather.temp.day}</td>
                <td>{weather.temp.night}</td>
                <td>{weather.temp.min}</td>
                <td>{weather.temp.max}</td>
            </tr>
      );
    });
  }

    render() {
        if (!this.props.city) {
            return <div>Search your city ...</div>;
        }
        return (
            <div>
                <table className="table table-bordered table-striped table-sm">
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Day</th>
                        <th>Night</th>
                        <th>Min.</th>
                        <th>Max.</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderWeatherInfo()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        weatherlist: state.weather.list,
        city: state.weather.city
    };
}

//function matchDispatchToProps(dispatch){
    //return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
//}

export default connect(mapStateToProps, {fetchWeather})(WeatherDetails);