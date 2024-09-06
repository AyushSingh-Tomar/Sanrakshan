
// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api'; 

// Axios instance with default configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Fetch progress data
export const getProgress = (referenceId) => {
  return api.get(`/approvals/${referenceId}`);
};


export const fetchReferenceId = async () => {
  const response = await fetch('http://localhost:4000/api/approvals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: 'exampleUserId',
      document: 'exampleDocument',
    }),
  });

  console.log(response);

  if (!response.ok) {
    throw new Error('Failed to fetch reference ID');
  }

  const data = await response.json();
  return data;
};
