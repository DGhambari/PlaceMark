import Mongoose from "mongoose";

const { Schema } = Mongoose;

const pointOfInterestSchema = new Schema({
  category: String,
  title: String,
  latitude: Number,
  longitude: Number,
  placemarkid: {
    type: Schema.Types.ObjectId,
    ref: "Placemark",
  },
});

export const PointOfInterest = Mongoose.model("PointOfInterest", pointOfInterestSchema);
