import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, river, testPlacemarks, testPointOfInterests, kerry } from "../fixtures.js";

suite("Point of Interest API tests", () => {
  let user = null;
  let mayoRivers = null;

  setup(async () => {
    placemarkService.clearAuth();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggie);
    await placemarkService.deleteAllPlacemarks();
    await placemarkService.deleteAllPointOfInterests();
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggie);
    maggie.userid = user._id;
    mayoRivers = await placemarkService.createPlacemark(kerry);
  });

  teardown(async () => {});

  test("create Point of Interest", async () => {
    const returnedPointOfInterest = await placemarkService.createPointOfInterest(mayoRivers._id, river);
    assertSubset(river, returnedPointOfInterest);
  });

  test("create Multiple Points of Interest", async () => {
    for (let i = 0; i < testPointOfInterests.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPointOfInterest(mayoRivers._id, testPointOfInterests[i]);
    }
    const returnedPointOfInterests = await placemarkService.getAllPointOfInterests();
    assert.equal(returnedPointOfInterests.length, testPointOfInterests.length);
    for (let i = 0; i < returnedPointOfInterests.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const pointOfInterest = await placemarkService.getPointOfInterest(returnedPointOfInterests[i]._id);
      assertSubset(pointOfInterest, returnedPointOfInterests[i]);
    }
  });

  test("Delete Point of Interest Api", async () => {
    for (let i = 0; i < testPointOfInterests.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPointOfInterest(mayoRivers._id, testPointOfInterests[i]);
    }
    let returnedPointOfInterests = await placemarkService.getAllPointOfInterests();
    assert.equal(returnedPointOfInterests.length, testPointOfInterests.length);
    for (let i = 0; i < returnedPointOfInterests.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const pointOfInterest = await placemarkService.deletePointOfInterest(returnedPointOfInterests[i]._id);
    }
    returnedPointOfInterests = await placemarkService.getAllPointOfInterests();
    assert.equal(returnedPointOfInterests.length, 0);
  });

  test("denormalised placemark", async () => {
    for (let i = 0; i < testPointOfInterests.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPointOfInterest(mayoRivers._id, testPointOfInterests[i]);
    }
    const returnedPlacemark = await placemarkService.getPlacemark(mayoRivers._id);
    assert.equal(returnedPlacemark.pointOfInterests.length, testPointOfInterests.length);
    for (let i = 0; i < testPointOfInterests.length; i += 1) {
      assertSubset(testPointOfInterests[i], returnedPlacemark.pointOfInterests[i]);
    }
  });
});
