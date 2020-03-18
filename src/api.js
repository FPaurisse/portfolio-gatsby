import axios from 'axios';

export const baseURL = `${process.env.GATSBY_API_URL}`;

export const api = axios.create({
  baseURL,
});
