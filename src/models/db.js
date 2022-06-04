import { userMemStore } from "./mem/user-mem-store.js";
import { placemarkMemStore } from "./mem/placemark-mem-store.js";
import { pointOfInterestMemStore } from "./mem/pointOfInterest-mem-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { placemarkJsonStore } from "./json/placemark-json-store.js";
import { pointOfInterestJsonStore } from "./json/pointOfInterest-json-store.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { placemarkMongoStore } from "./mongo/placemark-mongo-store.js";
import { pointOfInterestMongoStore } from "./mongo/pointOfInterest-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
  placemarkStore: null,
  pointOfInterestStore: null,

  init(storeType) {
    switch (storeType) {
      // case "json" :
      //   this.userStore = userJsonStore;
      //   this.placemarkStore = placemarkJsonStore;
      //   this.pointOfInterestStore = pointOfInterestJsonStore;
      //   break;
      case "mongo" :
        this.userStore = userMongoStore;
        this.placemarkStore = placemarkMongoStore;
        this.pointOfInterestStore = pointOfInterestMongoStore;
        connectMongo();
        break;
      default :
        // this.userStore = userMemStore;
        // this.placemarkStore = placemarkMemStore;
        // this.pointOfInterestStore = pointOfInterestMemStore;
    }
  }
};
