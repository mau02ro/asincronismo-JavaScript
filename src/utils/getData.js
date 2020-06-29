const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const API = "https://rickandmortyapi.com/api/character/";
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          resolve(null, JSON.parse(xhttp.responseText));
        } else {
          const error = new Error(`Error ${url_api}`);
          reject(error, null);
        }
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;
