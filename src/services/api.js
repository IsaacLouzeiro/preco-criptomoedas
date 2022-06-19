import axios from "axios";

const api = axios.create({
  method: 'GET',
  baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  headers: {
    'Access-Control-Allow-Origin': "https://criptomoeda.netlify.app",
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': "*",
    'X-CMC_PRO_API_KEY': `16514700-50e6-4f13-8564-8705d12cc15b`,
  },
});

export default api;