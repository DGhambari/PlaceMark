export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
      _id: "621f2bf90f8832d1b1b1234a",
      __v: 0,
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
      _id: "621f2bf90f8832d1b1b3630b",
      __v: 0,
    },
    bart: {
      admin: false,
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
      _id: "621f2bf90f8832d1b1b3634a",
      __v: 0,
    },    
  },
  placemarks: {
    _model: "Placemark",
    river: {
      title: "Rivers",
      _id: "621f2bf90f8832d1b1b1234a",
      __v: 0,
    }
  },
  pointOfInterest: {
    _model: "PointOfInterest",
    nationalParks: {
      category: "National Parks",
      place: "Kerry National Park",
      lat: "-7",
      lng: "55",
      img: "https://res.cloudinary.com/dghambari/image/upload/v1654347457/obznixwgc7uoamldrh14.jpg",
      _id: "621f2bf90f8832d1b1b1234c",
      __v: 0,
    }
  },
};