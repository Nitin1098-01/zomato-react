import React from "react";
class RestaurantComponent extends React.Component {
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

export default RestaurantComponent;
