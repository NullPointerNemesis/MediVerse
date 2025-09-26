import axios from 'axios';

export const ehrApi = axios.create({ baseURL: 'http://localhost:8080' });
