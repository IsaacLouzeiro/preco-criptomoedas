import axios from "axios";

const api = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com/",
  headers: {
    "X-CMC_PRO_API_KEY": "16514700-50e6-4f13-8564-8705d12cc15b"
  }
});

export default api;