import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index';
import { Field, reduxForm } from "redux-form";

class WeatherSearch extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;

        return (
            <div>
                <input className="form-control" type="text" {...field.input} />
            </div>
        );
    }

    onSubmit(values) {
        //console.log(values);
        this.props.fetchWeather(values.city, 5);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title For Post"
                    name="city"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Get Weather</button>
            </form>
        );
    }
}

//export default connect(null, {fetchWeather})(WeatherSearch);
export default reduxForm({
  form: "WeatherSearchForm"
})(connect(null, { fetchWeather })(WeatherSearch));