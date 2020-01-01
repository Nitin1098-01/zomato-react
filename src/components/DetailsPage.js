import React from "react";
import "../style.css";
import {
  getCoordinates,
  searchForRestaurants,
  getRestaurants
} from "../helpers/methods";
import Axios from "axios";
import RestaurantComponent from "./RestaurantComponent";
class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }
  setRestaurants = restaurants => {
    let restaurantsList = getRestaurants(restaurants);
    this.setState({
      restaurants: restaurantsList
    });
  };
  componentDidMount = () => {
    let city = localStorage.getItem("city");
    if (city) {
      getCoordinates(city, result => {
        searchForRestaurants(result[1], result[0], this.setRestaurants);
      });
    }
  };
  renderRestaurantList = () => {
    if (this.state.restaurants.length == 0) {
      return <div>No restaurants available</div>;
    } else {
      let components = [];
      this.state.restaurants.forEach(restaurant => {
        components.push(<RestaurantComponent restaurant={restaurant} />);
      });
      return components;
    }
  };
  render() {
    return (
      <body>
        <header>
          <div class="container_full">
            <div class="response">
              <div class="zomato_banner">
                <img src="" alt="" />
              </div>
            </div>

            <div class="header-item-list">
              <div class="left-item header-item">
                <img
                  src="https://b.zmtcdn.com/images/icons/get-the-app-plain.svg"
                  alt=""
                />
                <span>Get the App</span>
              </div>

              <div class="filler"></div>
              <div class="header-item">
                <img
                  src="https://b.zmtcdn.com/images/icons/order-online.svg"
                  alt=""
                />
                <span>Order Food</span>
              </div>
              <div class="header-item">
                <img
                  src="https://b.zmtcdn.com/images/icons/header_gold_icon.svg"
                  alt=""
                />
                <span>Zomato Gold</span>
              </div>
            </div>
          </div>
        </header>
        {this.renderRestaurantList()}
      </body>
    );
  }
}

export default DetailsPage;
