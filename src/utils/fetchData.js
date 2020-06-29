let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();//instancia del objeto
        xhttp.open('GET', url_api, true);//el valor booleano indica si esta activo el asincronismo
        //cuando un cambio ocurra 
        xhttp.onreadystatechange = (() => {
            //estados de la peticion https://rickandmortyapi.com/api/character/
            if (xhttp.readyState === 4) {
                (xhttp.status === 200) ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error('Error', url_api))
            }
        });
        //se envia la solicitud 
        xhttp.send();
    });    
}

module.exports = fetchData;