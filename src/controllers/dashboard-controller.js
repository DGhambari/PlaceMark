import { PlacemarkSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const placemarks = await db.placemarkStore.getUserPlacemarks(loggedInUser._id);
      const viewData = {
        title: "PlaceMark Dashboard",
        user: loggedInUser,
        placemarks: placemarks,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPlacemark: {
    validate: {
      payload: PlacemarkSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("dashboard-view", { title: "Add PlaceMark error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newplacemark = {
        userid: loggedInUser._id,
        title: request.payload.title,
      };
      await db.placemarkStore.addPlacemark(newplacemark);
      return h.redirect("/dashboard");
    },
  },

  deletePlacemark: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      await db.placemarkStore.deletePlacemarkById(placemark._id);
      return h.redirect("/dashboard");
    },
  },
};
