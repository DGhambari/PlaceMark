import { PointOfInterestSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const placemarkController = {
  index: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const viewData = {
        title: "Placemark",
        placemark: placemark,
      };
      return h.view("placemark-view", viewData);
    },
  },

  addPointOfInterest: {
    validate: {
      payload: PointOfInterestSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("placemark-view", { title: "Add pointOfInterest error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const newPointOfInterest = {
        category: request.payload.category,
        title: request.payload.title,
        latitude: request.payload.latitude,
        longitude: Number(request.payload.longitude),
      };
      await db.pointOfInterestStore.addPointOfInterest(placemark._id, newPointOfInterest);
      return h.redirect(`/placemark/${placemark._id}`);
    },
  },

  deletePointOfInterest: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      await db.pointOfInterestStore.deletePointOfInterest(request.params.pointOfInterestid);
      return h.redirect(`/placemark/${placemark._id}`);
    },
  },
};
