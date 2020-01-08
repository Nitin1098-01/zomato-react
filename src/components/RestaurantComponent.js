import React from "react";

// import { far  } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "font-awesome/css/font-awesome.min.css";

class RestaurantComponent extends React.Component {
  constructor(props) {
    super(props);
    let favoritesInStorage = localStorage.getItem("favorites");
    let loggedInUser = localStorage.getItem("logged_user");
    let isFavorite = this.props.isFavorite;
    favoritesInStorage = JSON.parse(favoritesInStorage);
    if (!favoritesInStorage) favoritesInStorage = [];
    favoritesInStorage.forEach(entry => {
      if (
        entry.usr == loggedInUser &&
        entry.restaurantId == this.props.restaurant.res_id
      ) {
        isFavorite = true;
      }
    });
    this.state = {
      isFavorite: isFavorite,
      loggedInUser: loggedInUser
    };
  }
  handleCall = () => {
    alert(this.props.restaurant.call);
  };
  handleMenu = () => {
    window.open(this.props.restaurant.view_menu, "_blank");
  };
  handleOrder = () => {
    if (this.props.restaurant.order_now) {
      window.open(this.props.restaurant.order_now, "_blank");
    }
  };
  onFavoriteClicked = () => {
    // let favoritesInStorage = [];
    let localStorageObject = localStorage.getItem("credentials");
    localStorageObject = JSON.parse(localStorageObject);
    let currentUserItem = localStorageObject.filter(entry => {
      return entry.usr == this.state.loggedInUser;
    });
    currentUserItem = currentUserItem[0];
    let newFavorites = [];
    currentUserItem.favorites.forEach(favorite => {
      if (favorite.res_id != this.props.restaurant.res_id) {
        newFavorites.push(favorite);
      }
    });
    currentUserItem.favorites = newFavorites;
    // localStorageObject = localStorageObject.filter(entry => {
    let newList = localStorageObject.filter(
      entry => !(entry.usr == this.state.loggedInUser)
    );
    newList.push(currentUserItem);
    localStorage.setItem("credentials", JSON.stringify(newList));
    this.setState({
      isFavorite: false
    });
    if (this.props.onFavoritesChanged) {
      this.props.onFavoritesChanged();
    }
    //   return !(
    //     entry.usr == this.state.loggedInUser &&
    //     entry.restaurantId == this.props.restaurant.res_id
    //   );
    // });

    // // localStorage.setItem("favorites", JSON.stringify(favoritesInStorage));
    // localStorage.setItem("credentials", JSON.stringify(localStorageObject));
    // this.setState({
    //   isFavorite: false
    // });
  };
  onUnFavoriteClicked = () => {
    // let favoritesInStorage = [];
    let localStorageObject = localStorage.getItem("credentials");
    localStorageObject = JSON.parse(localStorageObject);
    let currentUserItem = localStorageObject.filter(entry => {
      return entry.usr == this.state.loggedInUser;
    });
    currentUserItem = currentUserItem[0];
    currentUserItem.favorites.push(this.props.restaurant);
    // localStorageObject = localStorageObject.filter(entry => {
    let newList = localStorageObject.filter(
      entry => !(entry.usr == this.state.loggedInUser)
    );
    newList.push(currentUserItem);
    localStorage.setItem("credentials", JSON.stringify(newList));
    this.setState({
      isFavorite: true
    });

    if (this.props.onFavoritesChanged) {
      this.props.onFavoritesChanged();
    }
  };
  render() {
    return (
      <div class="center_content">
        <div class="row">
          <img src={this.props.restaurant.thumb} alt="" />
          <div class="column">
            <div class="detail_contents">
              <div class="fav">
                <div class="quick_bites">
                  <p>QUICK BITES</p>
                </div>
                <div class="add_fav">
                  {this.state.isFavorite ? (
                    //Favorited
                    <button onClick={this.onFavoriteClicked} class="favorites">
                      <img
                        src={require("../assests/favorite_bold.svg")}
                        alt=""
                      ></img>
                    </button>
                  ) : (
                    //Not favorited yet
                    <button
                      onClick={this.onUnFavoriteClicked}
                      class="unfavorites"
                    >
                      {/* Not favorite yet */}
                      <img
                        src={require("../assests/favorite.svg")}
                        alt=""
                      ></img>
                    </button>
                  )}
                </div>
              </div>
              <div class="name">
                <p>{this.props.restaurant.name}</p>
              </div>
              <div class="locality">
                <p>{this.props.restaurant.locality}</p>
              </div>
              <div class="address">
                <p>{this.props.restaurant.address}</p>
              </div>
              <div class="check-order">
                <p>
                  {this.props.restaurant.order_now
                    ? ""
                    : "Order not Available now!!! Try sometimes later!!!"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div class="middle_outlets">
          <div class="row">
            <div class="middle_input_o">
              <p>CUISINES : </p>
            </div>
            <div class="middle_output_o">
              <p>{this.props.restaurant.cuisines}</p>
            </div>
          </div>
          <div class="row">
            <div class="middle_input_t">
              <p>COST FOR 2:</p>
            </div>
            <div class="middle_output_t">
              <p>{this.props.restaurant.cost_for_two}</p>
            </div>
          </div>
          <div class="row">
            <div class="middle_input_h">
              <p>HOURS:</p>
            </div>
            <div class="middle_output_h">
              <p>{this.props.restaurant.timing}</p>
            </div>
          </div>
        </div>
        <hr />

        <div class="lower_outlets">
          <div class="column">
            <button onClick={this.handleCall} class="plain-btn">
              Call
            </button>
            <button onClick={this.handleMenu} class="plain-btn">
              View Menu
            </button>
            <button
              onClick={this.handleOrder}
              class="green-btn"
              disabled={!this.props.restaurant.order_now}
            >
              Order now soon
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantComponent;
