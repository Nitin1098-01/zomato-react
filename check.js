const PUBLIC_TOKEN =
  "pk.eyJ1Ijoibml0aW5yb3NoYW42Mzk5IiwiYSI6ImNrNHRqdHlwNTA5NXgzbW5vajk4MWVoczAifQ.iIMuX39KkUzWR_4XZm74XQ";

var apiKey = "a67f649844754e51ed9a7e830c4baa36";
async function categories() {
  let url = "https://developers.zomato.com/api/v2.1/categories";
  let request = new XMLHttpRequest(url);
  request.onreadystatechange = ev => {
    console.log(ev);
  };
  request.open("GET", url);
  request.setRequestHeader("user-key", apiKey);
  request.send();
}
async function cities() {
  let url = "https://developers.zomato.com/api/v2.1/cities?q=Coimbatore";
  let request = new XMLHttpRequest(url);
  request.onreadystatechange = ev => {
    console.log(ev);
  };
  request.open("GET", url);
  request.setRequestHeader("user-key", apiKey);
  request.send();
}

async function locations() {
  let url = "https://developers.zomato.com/api/v2.1/locations?query=Coimbatore";
  let request = new XMLHttpRequest(url);
  request.onreadystatechange = ev => {
    console.log(ev);
  };
  request.open("GET", url);
  request.setRequestHeader("user-key", apiKey);
  request.send();
}

async function searchForRestaurants(lat, lon, onSuccess) {
  let url = `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&radius=20000`;
  let request = new XMLHttpRequest(url);
  request.onreadystatechange = ev => {
    if (request.readyState == 4 && request.status == 200) {
      let responseObj = JSON.parse(ev.target.responseText);
      onSuccess(responseObj.restaurants);
    }
  };
  request.open("GET", url);
  request.setRequestHeader("user-key", apiKey);
  request.send();
}

async function collections() {
  let url =
    "https://developers.zomato.com/api/v2.1/collections?city_id=7&lat=80.2707&lon=13.0827";
  let request = new XMLHttpRequest(url);
  request.onreadystatechange = ev => {
    console.log(JSON.parse(request.responseText));
  };
  request.open("GET", url);
  request.setRequestHeader("user-key", apiKey);
  request.send();
}

function getRestaurants(heavyArray) {
  let restaurants_array = []; // [] for Array
  heavyArray.forEach(obj => {
    let emptyObj = {}; // {} for Objects
    emptyObj.thumb = obj.restaurant.thumb;
    emptyObj.name = obj.restaurant.name;
    emptyObj.locality = obj.restaurant.location.locality;
    emptyObj.address = obj.restaurant.location.address;
    emptyObj.cuisines = obj.restaurant.cuisines;
    emptyObj.cost_for_two = obj.restaurant.average_cost_for_two;
    emptyObj.timing = obj.restaurant.timings;
    emptyObj.call = obj.restaurant.phone_numbers;
    emptyObj.view_menu = obj.restaurant.menu_url;
    emptyObj.order_now = obj.restaurant.order_url;
    restaurants_array.push(emptyObj);
  });
  return restaurants_array;
}

function getCoordinates(searchQuery, onSuccess) {
  let latitude = "";
  let longitude = "";
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=${PUBLIC_TOKEN}`;

  let request = new XMLHttpRequest(url);
  request.open("GET", url);
  // request.setRequestHeader("user-key", PUBLIC_TOKEN);
  request.send();
  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      // onSuccess(request.responseText);
      // console.log(request.responseText);
      let jsonObj = JSON.parse(request.responseText);
      onSuccess(jsonObj.features[0].center);
    }
  };
}

collections();

getCoordinates("Chennai");
getCoordinates("Bangalore");
getCoordinates("Delhi");
getCoordinates("Kolkata");
