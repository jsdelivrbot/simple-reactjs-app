import {combineReducers} from 'redux';
import WeatherReducer from './reducer_weather';
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
    weather: WeatherReducer,
    form: formReducer
});

export default allReducers;
