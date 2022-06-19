/* Example in Node.js */
import { get } from 'axios';

let response = null;
new Promise((resolve, reject) => {
  try {
    response = get('http://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    // response = get('http://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '16514700-50e6-4f13-8564-8705d12cc15b',
        // 'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});