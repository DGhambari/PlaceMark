import Mongoose from "mongoose";

const { Schema } = Mongoose;

const pointOfInterestSchema = new Schema({
  category: String,
  place: String,
  lat: Number,
  lng: Number,
  placemarkid: {
    type: Schema.Types.ObjectId,
    ref: "Point of Interest",
  },
});

export const PointOfInterest = Mongoose.model("PointOfInterest", pointOfInterestSchema);
