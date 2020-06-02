import Axios from 'axios'

const axios = Axios.create({
    baseURL : "https://homemade-food-service.herokuapp.com"
})

export default axios