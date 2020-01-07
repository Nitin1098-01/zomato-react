import React, { Component } from "react";
import "../style.css";
import RestaurantComponent from "./RestaurantComponent";

class Favorites extends Component {
  constructor(props) {
    super(props);
    let loggedInUser = localStorage.getItem("logged_user");
    let localStorageObj = JSON.parse(localStorage.getItem("credentials"));
    let currentUserObj = localStorageObj.filter(
      entry => entry.usr == loggedInUser
    );
    currentUserObj = currentUserObj[0];
    if (!currentUserObj) {
      currentUserObj = [];
    }
    this.state = {
      favorites: currentUserObj.favorites
    };
  }
  render() {
    return (
      <div class="general">
        <header>
          <div class="container_full">
            <div class="response">
              <div class="zomato_banner">
                <img src="" alt="" />
              </div>
            </div>

            {/* <div class="header-item-list">
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
              </div> */}
          </div>
        </header>

        {this.state.favorites.map(entry => (
          <RestaurantComponent restaurant={entry} />
        ))}
      </div>
    );
  }
}

export default Favorites;
