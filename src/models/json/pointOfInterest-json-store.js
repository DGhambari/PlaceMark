import { v4 } from "uuid";
// eslint-disable-next-line import/no-unresolved
import { JSONFile, Low } from "lowdb";

const db = new Low(new JSONFile("./src/models/json/pointOfInterests.json"));
db.data = { pointOfInterests: [] };

export const pointOfInterestJsonStore = {
  async getAllPointOfInterests() {
    await db.read();
    return db.data.pointOfInterests;
  },

  async addPointOfInterest(placemarkId, pointOfInterest) {
    await db.read();
    pointOfInterest._id = v4();
    pointOfInterest.placemarkid = placemarkId;
    db.data.pointOfInterests.push(pointOfInterest);
    await db.write();
    return pointOfInterest;
  },

  async getPointOfInterestsByPlacemarkId(id) {
    await db.read();
    return db.data.pointOfInterests.filter((pointOfInterest) => pointOfInterest.placemarkid === id);
  },

  async getPointOfInterestById(id) {
    await db.read();
    let pointOfInterest = db.data.pointOfInterests.find((pointOfInterest) => pointOfInterest._id === id);
    if (pointOfInterest == undefined) {
      pointOfInterest = null;
    }
    return pointOfInterest
  },

  async deletePointOfInterest(id) {
    await db.read();
    const index = db.data.pointOfInterests.findIndex((pointOfInterest) => pointOfInterest._id === id);
    if (index !== -1) db.data.pointOfInterests.splice(index, 1);
    await db.write();
  },

  async deleteAllPointOfInterests() {
    db.data.pointOfInterests = [];
    await db.write();
  },

  async updatePointOfInterest(pointOfInterest, updatedPointOfInterest) {
    pointOfInterest.category = updatedPointOfInterest.category;
    pointOfInterest.title = updatedPointOfInterest.title;
    pointOfInterest.latitude = updatedPointOfInterest.latitude;
    pointOfInterest.longitude = updatedPointOfInterest.longitude;
    await db.write();
  },
};
