import React from "react";
import "../style.css";
import { searchForRestaurants } from "../helpers/methods";

class HomePage extends React.Component {
  handleSearch = () => {
    localStorage.setItem("city", this.state.city);
    window.location.replace("/details");
  };
  handleDropDown = ev => {
    let city = ev.target.value;
    this.setState({
      city: city
    });
  };
  render() {
    return (
      <body>
        <header>
          <div class="container">
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
        <section class="banner">
          <div class="container">
            <div class="login-actions">
              <button>Login</button>
              <button class="outlined-btn">Create an account</button>
            </div>
            <div class="zomato-logo">
              <img
                src="https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg"
                alt=""
              />
              <h3>Find the best restaurants, cafes, and bars in Coimbatore</h3>
            </div>

            <div class="search-actions">
              <select onChange={this.handleDropDown} class="raised-btn">
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
                <option value="delhi">Delhi</option>
                <option value="kolkata">Kolkata</option>
              </select>

              <button onClick={this.handleSearch} class="primary-btn">
                Search
              </button>
            </div>
          </div>
        </section>
        <main>
          <div class="general">
            <div class="container">
              <div class="row">
                <div class="left-side-pane">
                  <div class="poster-img">
                    <img
                      src="https://b.zmtcdn.com/zomaland/cdc32709b500b0d16995a13ffab191f61573792927.jpeg?output-format=webp"
                      alt=""
                    />
                  </div>

                  <div class="left_content">
                    <div class="line1">
                      <p>Collections</p>

                      <div class="line2">
                        <p>
                          Explore curated lists of top restaurants, cafes, pubs,
                          and bars in Coimbatore, based on trends
                        </p>
                      </div>
                    </div>

                    <div class="grid-container">
                      <div class="grid-item">
                        <div class="row">
                          <img src="" alt="" />
                        </div>
                      </div>
                      <div class="grid-item"></div>
                      <div class="grid-item"></div>
                      <div class="grid-item"></div>
                    </div>

                    <button class="full-btn">
                      All Collection in Coimbatore
                    </button>
                  </div>

                  <br />
                </div>

                <div class="right-side-pane">
                  <div class="right-content">
                    <div class="line1">
                      <p>Order Food Online</p>

                      <div class="line2">
                        <p>Best restaurants delivering to your doorstep</p>
                      </div>
                    </div>

                    <div class="right_message">
                      <div class="right_first">
                        <p>Enter your delivery location</p>

                        <div class="location_tracker">
                          <div class="row">
                            <div class="row_content">
                              <p>Type the delivery location here...</p>
                            </div>
                            <div class="search_location">
                              <button class="primary1-btn">Detect</button>
                            </div>
                          </div>
                        </div>
                        <div class="right_pop">
                          <p>Order Food Online!</p>
                        </div>
                      </div>

                      <hr />

                      <div class="no-use">
                        <p>Use code ZOMATO to get upto 50% OFF. T&Cs apply.</p>
                      </div>

                      <div class="na">
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="icon-panel">
                <div class="line1">
                  <p>Quick Searches</p>

                  <div class="line2">
                    <p>Discover restaurants by type of meal</p>
                  </div>
                </div>
                <div class="icons-display">
                  <div class="ui segment eight column grid">
                    <a
                      href="https://www.zomato.com/coimbatore/breakfast"
                      style={{ textDecoration: "none", color: "black" }}
                      class="column ta-center start-categories-item"
                    >
                      <img
                        class="ui middle aligned mini image mb5"
                        src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp"
                        alt=""
                        data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp"
                        style={{
                          height: "48px",
                          width: "48px",
                          display: "inline-block"
                        }}
                      />
                      <div>Breakfast</div>
                    </a>

                    <a
                      href="https://www.zomato.com/coimbatore/lunch"
                      style={{
                        textDecoration: "none",
                        color: "black"
                      }}
                      class="column ta-center start-categories-item"
                    >
                      <img
                        class="ui middle aligned mini image mb5"
                        src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp"
                        alt="Hello"
                        data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp"
                        style={{
                          height: "48px",
                          width: "48px",
                          display: "inline-block"
                        }}
                      />
                      <div>Lunch</div>
                    </a>

                    <a
                      href="https://www.zomato.com/coimbatore/dinner"
                      style={{
                        textDecoration: "none",
                        color: "black"
                      }}
                      class="column ta-center start-categories-item"
                    >
                      <img
                        class="ui middle aligned mini image mb5"
                        src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp"
                        alt="Hello"
                        data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp"
                        style={{
                          height: "48px",
                          width: "48px",
                          display: "inline-block"
                        }}
                      />
                      <div>Dinner</div>
                    </a>

                    <a
                      href="https://www.zomato.com/coimbatore/delivery"
                      style={{ textDecoration: "none", color: "black" }}
                      class="column ta-center start-categories-item"
                    >
                      <img
                        class="ui middle aligned mini image mb5"
                        src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png?output-format=webp"
                        alt=""
                        data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png?output-format=webp"
                        style={{
                          height: "48px",
                          width: "48px",
                          display: "inline-block"
                        }}
                      />
                      <div>Delivery</div>
                    </a>

                    <a
                      href="https://www.zomato.com/coimbatore/restaurants?category=6"
                      style={{ textDecoration: "none", color: "black" }}
                      class="column ta-center start-categories-item"
                    >
                      <img
                        class="ui middle aligned mini image mb5"
                        src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp"
                        alt=""
                        data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp"
                        style={{
                          height: "48px",
                          width: "48px",
                          display: "inline-block"
                        }}
                      />
                      <div>Cafés</div>
                    </a>

                    <a
                      href="https://www.zomato.com/coimbatore/restaurants?desserts-bakes=1"
                      style={{ textDecoration: "none", color: "black" }}
                      class="column ta-center start-categories-item"
                    >
                      <img
                        class="ui middle aligned mini image mb5"
                        src="https://b.zmtcdn.com/images/search_tokens/app_icons/special_10.png?output-format=webp"
                        alt=""
                        data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/special_10.png?output-format=webp"
                        style={{
                          height: "48px",
                          width: "48px",
                          display: "inline-block"
                        }}
                      />
                      <div>Desserts &amp; Bakes</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </body>
    );
  }
}

export default HomePage;
