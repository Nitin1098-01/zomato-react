const reactRootElement = document.querySelector("#react-root");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }
  componentDidMount = () => {
    let city = localStorage.getItem("selectedCity");
    if (city) {
      getCoordinates(city, result => {
        searchForRestaurants(result[1], result[0], restaurants => {
          let restaurantsList = getRestaurants(restaurants);
          this.setState({
            restaurants: restaurantsList
          });
        });
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
    return <div>{this.renderRestaurantList()}</div>;
  }
}

class RestaurantComponent extends React.Component {
  constructor(props) {
    super(props);
    /* emptyObj.thumb = obj.restaurant.thumb;
    emptyObj.name = obj.restaurant.name;
    emptyObj.locality = obj.restaurant.location.locality;
    emptyObj.address = obj.restaurant.location.address;
    emptyObj.cuisines = obj.restaurant.cuisines;
    emptyObj.cost_for_two = obj.restaurant.average_cost_for_two;
    emptyObj.timing = obj.restaurant.timings;
    emptyObj.call = obj.restaurant.phone_numbers;
    emptyObj.view_menu = obj.restaurant.menu_url;
    emptyObj.order_now = obj.restaurant.order_url;*/
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
    } else {
      alert(
        "Oops!!! Order for this Restaurant is currently unavailable...Try sometimes later!!! "
      );
    }
  };

  render() {
    return (
      <div class="center_content">
        <div class="row">
          <img src={this.props.restaurant.thumb} alt="" />
          <div class="column">
            <div class="detail_contents">
              <div class="quick_bites">
                <p>QUICK BITES</p>
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
            </div>
          </div>
        </div>
        <hr />

        <div class="middle_outlets">
          <div class="row">
            <div class="middle_input">
              <p>CUISINES : </p>
            </div>
            <div class="middle_output">
              <p>{this.props.restaurant.cuisines}</p>
            </div>
          </div>
          <div class="row">
            <div class="middle_input">
              <p>COST FOR TWO:</p>
            </div>
            <div class="middle_output">
              <p>{this.props.restaurant.cost_for_two}</p>
            </div>
          </div>
          <div class="row">
            <div class="middle_input">
              <p>HOURS :</p>
            </div>
            <div class="middle_output">
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
            <button onClick={this.handleOrder} class="green-btn">
              Order now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, reactRootElement);
