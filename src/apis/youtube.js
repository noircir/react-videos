import axios from 'axios';

const KEY = 'AIzaSyCbfVn7k_rXqp0kXzYUHj9hu9QLU3Y5AKw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});