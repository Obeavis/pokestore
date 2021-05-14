import axios from "axios";

/**
 * @param {object} headerParams - header params of request
 * Return axios customized instance
 * @returns {axios}
 */
const baseService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  maxRedirects: 0,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseService;
