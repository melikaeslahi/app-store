//  get all product from localhost:9000 

import axios from "axios";

// method is GET
const BASE_URL= 'http://localhost:9000'; 

export const getProducts = ()=>{
 const url = `${BASE_URL}/products`;
 return axios.get(url);
}
