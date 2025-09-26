import axios from 'axios';

export const analyticsApi = axios.create({ baseURL: 'http://localhost:8080' });
