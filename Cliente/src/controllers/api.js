import axios from 'axios';

export function get_items(config) {

    // let headers = {
    //     'Iconico-Api-Key':config.org.apiKey,
    //     'Authorization':'Bearer ' + config.authToken
    // }; 
    // var parameters = config.parameters || {};
    // parameters.headers = headers;

    let host = "https://api.mercadolibre.com/sites/MLA/search?q=";
    let path = host + '/' + config.query;
    return axios.get(path, {});
}
// {
//     “author”: {
//     “name”: String
//     “lastname”: String
//     },
//     categories: [String, String, String, ...],
//     items: [
//     {"id": String,
//     "title": String,
//     "price": {
//     "currency": String,
//     "amount": Number,
//     "decimals": Number
//     },
//     “picture”: String,
//     "condition": String,
//     "free_shipping": Boolean
//     },
//     {...},
//     {...},
//     {...}
//     ]
//}