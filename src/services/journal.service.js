import axios from 'axios';
const baseUrl = 'http://127.0.0.1:5000/api';

export const createJournalEntry = (payload) => axios.post(`${baseUrl}/create-journal`, payload)