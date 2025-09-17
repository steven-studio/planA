import axios from 'axios';

// Base URL for API requests
const API_URL = 'http://10.0.2.2:3000/api'; // Use 10.0.2.2 for Android emulator to connect to localhost

// Create an axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions for users
export const userApi = {
  getUsers: async () => {
    try {
      const response = await apiClient.get('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
  
  login: async (username, password) => {
    try {
      const response = await apiClient.post('/login', { username, password });
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
  
  register: async (userData) => {
    try {
      const response = await apiClient.post('/register', userData);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
};

// API functions for loan applications
export const loanApi = {
  getLoanApplications: async (userId) => {
    try {
      const response = await apiClient.get(`/loan-applications?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching loan applications:', error);
      throw error;
    }
  },
  
  submitLoanApplication: async (loanData) => {
    try {
      const response = await apiClient.post('/loan-applications', loanData);
      return response.data;
    } catch (error) {
      console.error('Error submitting loan application:', error);
      throw error;
    }
  },
  
  getLoanDetails: async (loanId) => {
    try {
      const response = await apiClient.get(`/loan-applications/${loanId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching loan details:', error);
      throw error;
    }
  },
};

// Test connection to server
export const testConnection = async () => {
  try {
    const response = await apiClient.get('/test');
    return response.data;
  } catch (error) {
    console.error('Server connection error:', error);
    throw error;
  }
}; 