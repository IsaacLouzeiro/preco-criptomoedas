import axios from "axios";

const api = axios.create({
    baseURL: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "https://criptomoeda.netlify.app",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "X-CMC_PRO_API_KEY": "16514700-50e6-4f13-8564-8705d12cc15b"
    }
});

export default api;