import { v4 } from "uuid";

let pointOfInterests = [];

export const pointOfInterestMemStore = {
  async getAllPointOfInterests() {
    return pointOfInterests;
  },

  async addPointOfInterest(placemarkId, pointOfInterest) {
    pointOfInterest._id = v4();
    pointOfInterest.placemarkid = placemarkId;
    pointOfInterests.push(pointOfInterest);
    return pointOfInterest;
  },

  async getPointOfInterestsByPlacemarkId(id) {
    return pointOfInterests.filter((pointOfInterest) => pointOfInterest.placemarkid === id);
  },

  async getPointOfInterestById(id) {
    let pointOfInterest = pointOfInterests.find((pointOfInterest) => pointOfInterest._id === id);
    if (pointOfInterest == undefined) {
      pointOfInterest = null;
    }
    return pointOfInterest;
  },

  async getPlacemarkPointOfInterests(placemarkId) {
    return pointOfInterests.filter((pointOfInterest) => pointOfInterest.placemarkid === placemarkId);
  },

  async deletePointOfInterest(id) {
    const index = pointOfInterests.findIndex((pointOfInterest) => pointOfInterest._id === id);
    if (index !== -1) pointOfInterests.splice(index, 1);
  },

  async deleteAllPointOfInterests() {
    pointOfInterests = [];
  },

  async updatePointOfInterest(pointOfInterest, updatedPointOfInterest) {
    pointOfInterest.category = updatedPointOfInterest.category;
    pointOfInterest.title = updatedPointOfInterest.title;
    pointOfInterest.latitude = updatedPointOfInterest.latitude;
    pointOfInterest.longitude = updatedPointOfInterest.longitude;
  },
};
