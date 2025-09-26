import axios from 'axios';

export const billingApi = axios.create({ baseURL: 'http://localhost:8080' });
