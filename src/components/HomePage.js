import React from "react";
import "../style.css";
import {
  searchForRestaurants,
  getCoordinates,
  collections
} from "../helpers/methods";
import DetailsPage from "./DetailsPage";
import CollectionComponent from "./CollectionComponent";

class HomePage extends React.Component {
  handleSearch = () => {
    this.setState({
      showDetails: true
      // city: "chennai"
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      city: "chennai",
      showDetails: false,
      collections: [],
      showAllCollections: false
    };

    this.collectiondetails();
  }
  handleAllCollectionsClicked = () => {
    this.setState({
      showAllCollections: !this.state.showAllCollections
    });
  };
  renderCollectionsList = () => {
    if (this.state.collections.length == 0) {
      return "";
    } else {
      if (this.state.showAllCollections || this.state.collections.length < 4) {
        return this.state.collections.map(collection => (
          <CollectionComponent collection={collection} />
        ));
      }
      return this.state.collections
        .slice(0, 4)
        .map(collection => <CollectionComponent collection={collection} />);
    }
  };

  // display = () => {
  //   return this.state.collections.map(collection => (
  //     <CollectionComponent collection={collection} />
  //   ));
  // };

  handleDropDown = ev => {
    let city = ev.target.value;
    console.log(city);
    this.setState({
      city: city
    });

    this.collectiondetails();
  };
  collectiondetails = () => {
    getCoordinates(this.state.city, result => {
      collections(result[1], result[0], collectresult => {
        //
        let cleanList = [];
        console.log("This is the entire response", collectresult);
        collectresult.collections.forEach(element => {
          console.log("== Item in collections == ", element);
          let collectObj = {};
          collectObj.image = element.collection.image_url;
          collectObj.url = element.collection.url;
          collectObj.title = element.collection.title;
          collectObj.description = element.collection.description;
          cleanList.push(collectObj);
          console.log(cleanList);

          this.setState({
            collections: cleanList
          });
        });
      });
    });
  };

  render() {
    return (
      <body>
        <div class="general">
          <header>
            <div class="container">
              <div class="header-item-list">
                <div class="left-item header-item">
                  <img
                    src="https://b.zmtcdn.com/images/icons/get-the-app-plain.svg"
                    alt=""
                  />
                  <span>
                    <a
                      href="https://www.zomato.com/mobile?ref=new_header_top_nav"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Get the App
                    </a>
                  </span>
                </div>

                <div class="filler"></div>
                <div class="header-item">
                  <img
                    src="https://b.zmtcdn.com/images/icons/order-online.svg"
                    alt=""
                  />
                  <span>
                    <a
                      href="https://www.zomato.com/ncr/order"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Order Food
                    </a>
                  </span>
                </div>
                <div class="header-item">
                  <img
                    src="https://b.zmtcdn.com/images/icons/book-a-table.svg"
                    alt=""
                  />
                  <span>
                    <a
                      href={`https://www.zomato.com/${this.state.city}/restaurants?q=`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Book a Table
                    </a>
                  </span>
                </div>
                <div class="header-item">
                  <img
                    src="https://b.zmtcdn.com/images/icons/header_gold_icon.svg"
                    alt=""
                  />
                  <span>
                    <a
                      href="https://www.zomato.com/gold"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Zomato Gold
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
          <section class="banner">
            <div class="container">
              {/* <div class="login-actions">
                <button>Login</button>
                <button class="outlined-btn">Create an account</button>
              </div> */}
              <div class="zomato-logo">
                <img
                  src="https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg"
                  alt=""
                />
                <h3>
                  Find the best restaurants, cafes, and bars in Coimbatore
                </h3>
              </div>

              <div class="search-actions">
                <select onChange={this.handleDropDown} class="raised-btn">
                  <option value=""></option>
                  <option value="chennai">Chennai</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="kochi">Kochi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="dehradun">DehraDun</option>
                  <option value="lucknow">Lucknow</option>
                  <option value="amritsar">Amritsar</option>
                  <option value="ranchi">Ranchi</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="kanpur">Kanpur</option>
                  <option value="nagpur">Nagpur</option>
                  <option value="bhopal">Bhopal</option>
                  <option value="indore">Indore</option>
                </select>

                <button onClick={this.handleSearch} id="primary-searchbtn">
                  Search
                </button>
              </div>
            </div>
          </section>
          <main>
            {/* <div class="general"> */}
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
                      {this.renderCollectionsList()}
                    </div>

                    <button
                      onClick={this.handleAllCollectionsClicked}
                      class="full-btn"
                    >
                      {this.state.showAllCollections
                        ? "Hide All Collections"
                        : "Show All Collections"}
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
                      href={`https://www.zomato.com/${this.state.city}/breakfast}`}
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
                      href={`https://www.zomato.com/${this.state.city}/lunch}`}
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
                      href={`https://www.zomato.com/${this.state.city}/dinner`}
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
                      href={`https://www.zomato.com/${this.state.city}/delivery`}
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
                      href={`https://www.zomato.com/${this.state.city}/restaurants?category=6`}
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
                      href={`https://www.zomato.com/${this.state.city}/restaurants?desserts-bakes=1`}
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
            {/* </div> */}
            {this.state.showDetails ? (
              <DetailsPage key={this.state.city} city={this.state.city} />
            ) : (
              ""
            )}
          </main>
          <footer></footer>
        </div>
      </body>
    );
  }
}

export default HomePage;
