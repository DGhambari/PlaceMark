import axios from "axios";
import { maggie, serviceUrl } from "../fixtures.js";

export const placemarkService = {
  placemarkUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.placemarkUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.placemarkUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async createPlacemark(placemark) {
    const res = await axios.post(`${this.placemarkUrl}/api/placemarks`, placemark);
    return res.data;
  },

  async deleteAllPlacemarks() {
    const response = await axios.delete(`${this.placemarkUrl}/api/placemarks`);
    return response.data;
  },

  async deletePlacemark(id) {
    const response = await axios.delete(`${this.placemarkUrl}/api/placemarks/${id}`);
    return response;
  },

  async getAllPlacemarks() {
    const res = await axios.get(`${this.placemarkUrl}/api/placemarks`);
    return res.data;
  },

  async getPlacemark(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/placemarks/${id}`);
    return res.data;
  },

  async getAllPointOfInterests() {
    const res = await axios.get(`${this.placemarkUrl}/api/pointOfInterests`);
    return res.data;
  },

  async createPointOfInterest(id, pointOfInterest) {
    const res = await axios.post(`${this.placemarkUrl}/api/placemarks/${id}/pointOfInterests`, pointOfInterest);
    return res.data;
  },

  async deleteAllPointOfInterests() {
    const res = await axios.delete(`${this.placemarkUrl}/api/pointOfInterests`);
    return res.data;
  },

  async getPointOfInterest(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/pointOfInterests/${id}`);
    return res.data;
  },

  async deletePointOfInterest(id) {
    const res = await axios.delete(`${this.placemarkUrl}/api/pointOfInterests/${id}`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.placemarkUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common["Authorization"] = "";
  },
};
