import React from "react";
import WeatherDetails from '../containers/weather_list';
import WeatherSearch from '../containers/weather_search';

const App = () => (
    <div>
        <WeatherSearch />
        <br/>
        <WeatherDetails />
    </div>
);

export default App;