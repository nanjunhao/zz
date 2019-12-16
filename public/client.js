/*//  Food Central General Search
const url_fd = "https://api.nal.usda.gov/fdc/v1/search?api_key=4WdIvUD0RkjuanyS2VKjuIIqGOR6RkIPS4GuhyeF";
let fetchData = { 
    method: 'POST', 
    body: '{"generalSearchInput":"raw +broccoli"}', 
    headers: {
      'Content-Type': 'application/json'
    }
}
fetch(url_fd, fetchData)
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>FoodData Central General Search</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Food Central API: " + error;
  });  

//  Food Central Specific Item
const url_fd2 = "https://api.nal.usda.gov/fdc/v1/321900?api_key=4WdIvUD0RkjuanyS2VKjuIIqGOR6RkIPS4GuhyeF";
fetch(url_fd2)
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>FoodData Central Specific Item</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Food Central API: " + error;
  }); 

// fun translations morse code example
const BASE_URL = "https://api.funtranslations.com/translate/morse.json"; 
const url_ft = BASE_URL + "?text=Morse%20code%20is%20a%20dit%20and%20dah";

//const url = "https://randomuser.me/api/?results=10";

// fetch 
// more info here: https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
 fetch(url_ft)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>Fun Translations Morse Code</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Fun Translations API";
  });   

// fun translations yoda example
const BASE_URL2 = "https://api.funtranslations.com/translate/yoda.json";
const url_ft2 = BASE_URL2 + "?text=Scout%20is%20not%20feeling%20well";



fetch(url_ft2)
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>Fun Translations Yoda Example</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Fun Translations: " + error;
  }); */

//dictionary api
let jsonObject = null;
let searchForm = null;
const url_ft3 =
  "https://www.dictionaryapi.com/api/v3/references/sd2/json/horse?%20key=054fe729-72cc-439c-bb07-4e5c8768cf16";
function getAPIData(searchWord) {
  fetch(constructURLForWord(searchWord))
    .then(resp => resp.json()) // Transform the data into json
    .then(function getApi(data) {
      console.log("getting api for" + searchWord);
      displayDefinition(data);
      sound(data);
      /*document.getElementById("api").innerHTML =
        "<h1>Fun dictionary api</h1>" +
        JSON.stringify(data, undefined, 2) +
        "<br><br>";*/
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML +=
        "Error with Fun Translations " + error;
    });
}
function displayDefinition(data) {
  document.getElementById("word").innerHTML = "";
  document.getElementById("explain").innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    document.getElementById("explain").innerHTML +=
      data[i].shortdef[0] + "<br> <br>";
  }
  document.getElementById("word").innerHTML +=
    "<h2>" +
    data[0].meta.id +
    "<br> <br>" +
    data[0].hwi.prs[0].mw +
    "</h2>" +
    "<br> <br>";
}
function constructURLForWord(searchTerm) {
  return (
    "https://www.dictionaryapi.com/api/v3/references/sd2/json/" +
    searchTerm +
    "?%20key=054fe729-72cc-439c-bb07-4e5c8768cf16"
  );
}
function search() {
  let searchWord = document.getElementById("input").value;
  console.log(searchWord);
  getAPIData(searchWord);
}

function sound(data) {
  var letter = data[0].hwi.prs[0].sound.audio.charAt(0);
  var soundWord = data[0].hwi.prs[0].sound.audio;
  console.log("letter : " + letter + " " + soundWord);
  document.getElementById("player").src =
    "https://media.merriam-webster.com/soundc11/" +
    letter +
    "/" +
    soundWord +
    ".wav";
}
function getForecastFromCache(coords) {
  if (!("caches" in window)) {
    return null;
  }
  const url = `${window.location.origin}/forecast/${coords}`;
  return caches
    .match(url)
    .then(response => {
      if (response) {
        return response.json();
      }
      return null;
    })
    .catch(err => {
      console.error("Error getting data from cache", err);
      return null;
    });
} //getForecastFromCache
getAPIData("horse");
