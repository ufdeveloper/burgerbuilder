import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger-shan.firebaseio.com'
});

export default instance;