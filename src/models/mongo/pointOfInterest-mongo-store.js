import { PointOfInterest } from "./pointOfInterest.js";
import { Placemark } from "./placemark.js";

export const pointOfInterestMongoStore = {
  async getAllPointOfInterests() {
    const pointOfInterests = await PointOfInterest.find().lean();
    return pointOfInterests;
  },

  async addPointOfInterest(placemarkId, pointOfInterest) {
    pointOfInterest.placemarkid = placemarkId;
    const newPointOfInterest = new PointOfInterest(pointOfInterest);
    const pointOfInterestObj = await newPointOfInterest.save();
    return this.getPointOfInterestById(pointOfInterestObj._id);
  },

  async getPointOfInterestsByPlacemarkId(id) {
    const pointOfInterests = await PointOfInterest.find({ placemarkid: id }).lean();
    return pointOfInterests;
  },

  async getPointOfInterestById(id) {
    if (id) {
      const pointOfInterest = await PointOfInterest.findOne({ _id: id }).lean();
      return pointOfInterest;
    }
    return null;
  },

  async deletePointOfInterest(id) {
    try {
      await PointOfInterest.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllPointOfInterests() {
    await PointOfInterest.deleteMany({});
  },

  async updatePointOfInterest(oldPointOfInterest, updatedPointOfInterest) {
    const pointOfInterest = await PointOfInterest.findOne({ _id: updatedPointOfInterest._id });
    pointOfInterest.category = updatedPointOfInterest.category;
    pointOfInterest.title = updatedPointOfInterest.title;
    pointOfInterest.latitude = updatedPointOfInterest.latitude;
    pointOfInterest.longitude = updatedPointOfInterest.longitude;
    await oldPointOfInterest.save();
  },
};
