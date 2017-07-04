import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_WEATHER':
      console.log("=> " + action.payload.data.city.name);
      var city = action.payload.data.city.name;
      var weatherlist = _.get(action.payload.data, "list");
      return {...state, city: city, list: weatherlist};
    default:
      return state;
  }
}