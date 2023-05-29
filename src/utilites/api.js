import axios from "axios";

axios.defaults.baseURL = "https://6435ab5d83a30bc9ad671d0f.mockapi.io/";

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};