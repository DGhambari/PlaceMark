import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, PointOfInterestSpec, PointOfInterestSpecPlus, PointOfInterestArraySpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";

export const pointOfInterestApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const pointOfInterests = await db.pointOfInterestStore.getAllPointOfInterests();
        return pointOfInterests;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: PointOfInterestArraySpec, failAction: validationError },
    description: "Get all pointOfInterestApi",
    notes: "Returns all pointOfInterestApi",
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    async handler(request) {
      try {
        const pointOfInterest = await db.pointOfInterestStore.getPointOfInterestById(request.params.id);
        if (!pointOfInterest) {
          return Boom.notFound("No pointOfInterest with this id");
        }
        return pointOfInterest;
      } catch (err) {
        return Boom.serverUnavailable("No pointOfInterest with this id");
      }
    },
    tags: ["api"],
    description: "Find a Point of Interest",
    notes: "Returns a Point of Interest",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: PointOfInterestSpecPlus, failAction: validationError },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const pointOfInterest = await db.pointOfInterestStore.addPointOfInterest(request.params.id, request.payload);
        if (pointOfInterest) {
          return h.response(pointOfInterest).code(201);
        }
        return Boom.badImplementation("error creating pointOfInterest");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a pointOfInterest",
    notes: "Returns the newly created pointOfInterest",
    validate: { payload: PointOfInterestSpec },
    response: { schema: PointOfInterestSpecPlus, failAction: validationError },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.pointOfInterestStore.deleteAllPointOfInterests();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all Point of Interest Api",
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const pointOfInterest = await db.pointOfInterestStore.getPointOfInterestById(request.params.id);
        if (!pointOfInterest) {
          return Boom.notFound("No Point of Interest with this id");
        }
        await db.pointOfInterestStore.deletePointOfInterest(pointOfInterest._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Point of Interest with this id");
      }
    },
    tags: ["api"],
    description: "Delete a pointOfInterest",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },
};
