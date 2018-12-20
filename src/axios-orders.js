import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burguer-951f8.firebaseio.com/'
});

export default instance;