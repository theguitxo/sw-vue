export default {
  URL: 'https://swapi.co/api/',
  OPTIONS: {
    FILMS: 'films',
    PEOPLE: 'people',
    PLANETS: 'planets',
    SPECIES: 'species',
    STARSHIPS: 'starships',
    VEHICLES: 'vehicles',
  },
  ERRORS: {
    NOT_FOUND: {
      STATUS: 404,
      MESSAGE: 'Ups! Request not found!',
    },
    NOT_RESPONSE: {
      MESSAGE: 'A problem was occurred with the request!',
    },
  },
  QUERY_PARAMETERS: {
    PAGE: 'page',
    SEARCH: 'search',
  },
};
