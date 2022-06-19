import axios from "axios";

const api = axios.create({
  method: 'GET',
  baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  headers: {
      "_Access-Control-Allow-Origin": "https://criptomoeda.netlify.app",
      get "Access-Control-Allow-Origin"() {
          return this["_Access-Control-Allow-Origin"];
      },
      set "Access-Control-Allow-Origin"(value) {
          this["_Access-Control-Allow-Origin"] = value;
      },
      "_Access-Control-Allow-Credentials": true,
    get "Access-Control-Allow-Credentials"() {
        return this["_Access-Control-Allow-Credentials"];
    },
    set "Access-Control-Allow-Credentials"(value) {
        this["_Access-Control-Allow-Credentials"] = value;
    },
    'Access-Control-Allow-Headers': "*",
    'X-CMC_PRO_API_KEY': `16514700-50e6-4f13-8564-8705d12cc15b`,
  },
});

export default api;