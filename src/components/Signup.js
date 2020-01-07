import React from "react";
import "../style.css";

class Signup extends React.Component {
  // onNameChange = ev => {
  //   let usr = ev.target.value;
  //   this.setState({
  //     usr: usr
  //   });
  //   console.log(usr);
  // };
  // onPassChange = ev => {
  //   let pwd = ev.target.value;
  //   this.setState({
  //     pwd: pwd
  //   });
  //   console.log(pwd);
  // };
  // onMailChange = ev => {
  //   let mail = ev.target.value;
  //   this.setState({
  //     mail: mail
  //   });
  //   console.log(mail);
  // };

  onSChange = ev => {
    let name = ev.target.name;
    let value = ev.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    let favorites = [];
    let credential = {
      usr: this.state.usr,
      pwd: this.state.pwd,
      favorites: favorites
    };
    let localStorageData = localStorage.getItem("credentials");
    if (localStorageData) {
      localStorageData = JSON.parse(localStorageData);
    } else {
      localStorageData = [];
    }
    localStorageData.push(credential);
    localStorage.setItem("credentials", JSON.stringify(localStorageData));
    alert("Welcome user...Account created successfully!!!");
    window.open("/HomePage");
  };
  render() {
    return (
      <div class="container">
        <h1>Hi User...Sign up to get in touch</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="usr">
          <b>Username</b>
        </label>
        <input
          type="text"
          // onChange={this.onNameChange}
          onChange={this.onSChange}
          placeholder="Enter Email"
          name="usr"
          required
        ></input>

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          // onChange={this.onMailChange}
          onChange={this.onSChange}
          placeholder="Enter Email"
          name="email"
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

        <label for="psw-repeat">
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
        </label>

        {/* <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p> */}

        <div class="clearfix">
          <button type="button" class="cancelbtn">
            Cancel
          </button>
          <button onClick={this.handleSubmit} class="signupbtn">
            Sign Up
          </button>
        </div>
        <a href="/Loginpage"> Existing user? </a>
      </div>
    );
  }
}

export default Signup;
