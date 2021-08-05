const axios = require('axios');

exports.traer_todos = (req, res, next) => { 
    let query = req.query.query || 'test';
    let limit = req.query.limit || 4;
    let url = "https://api.mercadolibre.com/sites/MLA/search?q=" + query;
     
    axios.get(url)
      .then((response) => {  
          let result = parseResultItems(response.data, limit); 
          return res.send(result);    
      })
      .catch((error) => {
          return res.status(400).json(error);
      });
};

exports.objeto_get_id = async (req, res, next) => {
  try{
    let id = req.query.id; 
    let url = "https://api.mercadolibre.com/items/" + id; 
    let response = await axios.get(url); 

    let urlDes = "https://api.mercadolibre.com/items/" + id + "/description";
    let responseDes = await axios.get(urlDes); 

    let result = parseResultItemId(response.data, responseDes.data);  
    return res.send(result); 

  }catch (error) {
    return res.status(400).json(error);
  }
};

 
function parseResultItems(data, limit) {
  let result = {};
  let categoriesValues = data.available_filters[0].values;
  let categories = categoriesValues.map(value => {return value.name});
  
  let author = {  
      name: "",
      lastname: "" 
  }

  let items = [];
  let itemsResult = data.results;
  
  for (let i = 0; i < limit; i++) {
    var item = itemsResult[i]; 
    let price = item.price;
    let decimals = getDecimals(price);

    let object = {
      id: item.id,
      title: item.title,
      price:{
        currency: item.currency_id,
        amount: Math.trunc(price),
        decimals
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      state: item.seller_address.state.name
    };

    items.push(object);
  }
  
  result = {...{author},...{categories},...{items}};
  return result;
    
}

 
function parseResultItemId(data, descriptionResult){ 
  let result = {};
  let price = data.price;
  let decimals = getDecimals(price);
  let picture = data.pictures[0];
  let description = descriptionResult.plain_text || '';

  let author = {  
    name: "",
    lastname: "" 
  }   

  let item = {
    id: data.id,
    title: data.title,
    price:{
      currency: data.currency_id,
      amount: Math.trunc(price),
      decimals
    },
    picture: picture.url,
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
    sold_quantity: data.sold_quantity,
    description
  };

  result = {...{author},...{item}};
  return result;
    
}

function getDecimals(n){
  var nstring = (n + ""),
    nindex  = nstring.indexOf("."),
    decimals  = Number.parseInt((nindex > -1 ? nstring.substring(nindex + 1) : 00)); 

  return decimals;
}