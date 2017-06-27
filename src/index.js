import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SearchWeather from "./components/search_weather";

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/weather/search" component={SearchWeather} />
        </Switch>
      </div>
    </BrowserRouter>,
  document.querySelector(".container")
);
