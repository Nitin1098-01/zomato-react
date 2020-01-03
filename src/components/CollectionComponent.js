import React from "react";
import { getCoordinates } from "../helpers/methods";
class CollectionComponent extends React.Component {
  goto_url = () => {
    window.open(this.props.collection.url);
  };
  render() {
    return (
      <div class="collection_content" onClick={this.goto_url}>
        {/* {this.props.collection.url} */}
        <div class="row">
          <div class="imgcollect">
            <img src={this.props.collection.image} alt="" />
          </div>
          <div class="textcontent">
            <div class="column">
              <div class="img_title">{this.props.collection.title}</div>
              <div class="img_description">
                {this.props.collection.description}
              </div>
              {/* <div class="img_url">{this.props.collection.url}</div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionComponent;
