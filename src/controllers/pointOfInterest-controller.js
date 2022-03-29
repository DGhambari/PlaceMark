import { PointOfInterestSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const pointOfInterestController = {
  index: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const pointOfInterest = await db.pointOfInterestStore.getPointOfInterestById(request.params.pointOfInterestid);
      const viewData = {
        title: "Edit Point of Interest",
        placemark: placemark,
        pointOfInterest: pointOfInterest,
      };
      return h.view("pointOfInterest-view", viewData);
    },
  },

  update: {
    validate: {
      payload: PointOfInterestSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("pointOfInterest-view", { title: "Edit Point of Interest error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const pointOfInterest = await db.pointOfInterestStore.getPointOfInterestById(request.params.pointOfInterestid);
      const newPointOfInterest = {
        category: request.payload.category,
        title: request.payload.title,
        latitude: request.payload.latitude,
        longitude: Number(request.payload.longitude),
      };
      await db.pointOfInterestStore.updatePointOfInterest(pointOfInterest, newPointOfInterest);
      return h.redirect(`/placemark/${request.params.id}`);
    },
  },
};
