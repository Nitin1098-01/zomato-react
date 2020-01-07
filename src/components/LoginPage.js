import React from "react";
import "../style.css";

class Loginpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      usr: "",
      pwd: ""
    };
  }
  // onNameChange = ev => {
  //   lnameet usr = ev.target.value;
  //   this.setState({
  //     usr: usr
  //   });
  // };
  // onPassChange = ev => {
  //   let pwd = ev.target.value;
  //   this.setState({
  //     pwd: pwd
  //   });
  //   console.log(pwd);
  // };

  onSChange = ev => {
    let name = ev.target.name;
    let value = ev.target.value;
    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state)
    );
  };

  validate = () => {
    let storedata = localStorage.getItem("credentials");
    let endData = JSON.parse(storedata);
    let isUserPresent = false;
    console.log("42--", this.state);
    endData.forEach(element => {
      // if (element.usr == this.state.usr) {
      if (element.usr == this.state.usr) {
        //If user is present in db
        isUserPresent = true;
        // if (element.pwd == this.state.pwd) {
        if (element.pwd == this.state.pwd) {
          //The password of that user matches entered password
          alert("Signed in successfully");
          localStorage.setItem("logged_user", this.state.usr);
          window.open("/HomePage");
        } else {
          alert("Incorrect Password!!!");
        }
      }
    });
    if (!isUserPresent) {
      alert("User does not exist! Create account");
    }
  };
  render() {
    return (
      <div class="container">
        <h1>Login</h1>
        <p>One step ahead.</p>

        <label for="usr">
          <b>Username</b>
        </label>
        <input
          type="text"
          // onChange={this.onNameChange}
          onChange={this.onSChange}
          placeholder="Enter Username"
          name="usr"
          required
        ></input>

        <label for="pwd">
          <b>Password</b>
        </label>
        <input
          type="password"
          // onChange={this.onPassChange}
          onChange={this.onSChange}
          placeholder="Enter Password"
          name="pwd"
          required
        ></input>

        {/* <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        ></input>

        <label>
          <input
            type="checkbox"
            checked="checked"
            name="remember"
            style={{ marginBottom: "15px" }}
          ></input>
        </label> */}

        {/* <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p> */}

        <div class="clearfix">
          <button type="button" class="cancelbtn">
            Cancel
          </button>
          <button onClick={this.validate} class="signupbtn">
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

export default Loginpage;
