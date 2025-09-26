import axios from 'axios';

export const doctorApi = axios.create({ baseURL: 'http://localhost:8080' });
