import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const PointOfInterestSpec = Joi.object()
  .keys({
    category: Joi.string().required().example("Mountains"),
    title: Joi.string().required().example("Carrauntoohil"),
    latitude: Joi.number().required().max(90).min(-90).example(51.9990),
    longitude: Joi.number().required().max(180).min(-180).example(-9.7432),
    placemarkid: IdSpec,
  })
  .label("PointOfInterest");

export const PointOfInterestSpecPlus = PointOfInterestSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PointOfInterestPlus");

export const PointOfInterestArraySpec = Joi.array().items(PointOfInterestSpecPlus).label("PointOfInterestArray");

export const PlacemarkSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Kerry's Sights"),
    userid: IdSpec,
    pointOfInterests: PointOfInterestArraySpec,
  })
  .label("Placemark");

export const PlacemarkSpecPlus = PlacemarkSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PlacemarkPlus");

export const PlacemarkArraySpec = Joi.array().items(PlacemarkSpecPlus).label("PlacemarkArray");

