import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

// Automatically add Authorization token if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Authentication APIs
export const login = (email, password) => API.post('/users/login', { email, password });
export const register = (userData) => API.post('/users/register', userData);

// Location APIs
export const updateLocation = (locationData) => API.post('/locations/update', locationData);
export const getChildLocations = (childId) => API.get(`/locations/child/${childId}`);
