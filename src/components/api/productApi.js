import axios from "axios"

function fetchApi(){
    return axios.get('https://fakestoreapi.com/products')
}

export default fetchApi