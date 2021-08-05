import axios from 'axios';

export function get_items(config) { 

    let host = "http://localhost:3080/items";
     
    return axios.get(host, config);
}

export function get_item_id(config) { 

    let host = "http://localhost:3080/items/" + config.id;
     
    return axios.get(host, config);
}
