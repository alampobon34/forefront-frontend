import axios from "axios";

const url = "http://127.0.0.1:8000";

export const createContact = (contact) => {
  return axios.post(`${url}/api/contact`, contact);
};
