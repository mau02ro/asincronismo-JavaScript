const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async () => {
  try {
    console.log(0);

    const data = await fetchData(API);
    console.log(1);
    const personaje = await fetchData(`${API}${data.results[0].id}`);
    console.log(2);

    const dimension = await fetchData(personaje.origin.url);
    console.log(data.info.count);
    console.log(personaje.name);
    console.log(dimension.dimension);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
