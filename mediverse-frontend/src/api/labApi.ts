import axios from 'axios';

export const labApi = axios.create({ baseURL: 'http://localhost:8080' });
