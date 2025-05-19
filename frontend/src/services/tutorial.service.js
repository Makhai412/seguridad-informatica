// Archivo modificado para frontend/src/services/tutorial.service.js

import axios from "axios";
 
const http = axios.create({
  // Usamos la URL relativa en lugar de la IP directa
  // para que funcione a través del balanceador
  baseURL: import.meta.env.VITE_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
 
const getAll = () => {
  return http.get("/tutorials");
};
 
const get = (id) => {
  return http.get(`/tutorials/${id}`);
};
 
const create = (data) => {
  return http.post("/tutorials", data);
};
 
const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};
 
const remove = (id) => {
  return http.delete(`/tutorials/${id}`);
};
 
const removeAll = () => {
  return http.delete("/tutorials");
};
 
const findByTitle = (title) => {
  return http.get(`/tutorials?title=${title}`);
};
 
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
