import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { testPlacemarks, testPointOfInterests, mayo, kerry, river, testUsers } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Point of Interest Model tests", () => {

  let mayoList = null;

  setup(async () => {
    db.init("mongo");
    await db.placemarkStore.deleteAllPlacemarks();
    await db.pointOfInterestStore.deleteAllPointOfInterests();
    mayoList = await db.placemarkStore.addPlacemark(mayo);
    for (let i = 0; i < testPointOfInterests.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testPointOfInterests[i] = await db.pointOfInterestStore.addPointOfInterest(mayoList._id, testPointOfInterests[i]);
    }
  });

  test("create single Point of Interest", async () => {
    const kerryList = await db.placemarkStore.addPlacemark(kerry);
    const pointOfInterest = await db.pointOfInterestStore.addPointOfInterest(kerryList._id, river)
    assert.isNotNull(pointOfInterest._id);
    assertSubset (river, pointOfInterest);
  });

  test("create multiple pointOfInterestApi", async () => {
    const pointOfInterests = await db.placemarkStore.getPlacemarkById(mayoList._id);
    assert.equal(testPointOfInterests.length, testPointOfInterests.length)
  });

  test("delete all pointOfInterestApi", async () => {
    const pointOfInterests = await db.pointOfInterestStore.getAllPointOfInterests();
    assert.equal(testPointOfInterests.length, pointOfInterests.length);
    await db.pointOfInterestStore.deleteAllPointOfInterests();
    const newPointOfInterests = await db.pointOfInterestStore.getAllPointOfInterests();
    assert.equal(0, newPointOfInterests.length);
  });

  test("get a Point of Interest - success", async () => {
    const kerryList = await db.placemarkStore.addPlacemark(kerry);
    const pointOfInterest = await db.pointOfInterestStore.addPointOfInterest(kerryList._id, river)
    const newPointOfInterest = await db.pointOfInterestStore.getPointOfInterestById(pointOfInterest._id);
    assertSubset (river, newPointOfInterest);
  });

  test("delete One Point of Interest - success", async () => {
    const id = testPointOfInterests[0]._id;
    await db.pointOfInterestStore.deletePointOfInterest(id);
    const pointOfInterests = await db.pointOfInterestStore.getAllPointOfInterests();
    assert.equal(pointOfInterests.length, testPlacemarks.length - 1);
    const deletedPointOfInterest = await db.pointOfInterestStore.getPointOfInterestById(id);
    assert.isNull(deletedPointOfInterest);
  });

  test("get a placemark - bad params", async () => {
    assert.isNull(await db.pointOfInterestStore.getPointOfInterestById(""));
    assert.isNull(await db.pointOfInterestStore.getPointOfInterestById());
  });

  test("delete One User - fail", async () => {
    await db.pointOfInterestStore.deletePointOfInterest("bad-id");
    const pointOfInterests = await db.pointOfInterestStore.getAllPointOfInterests();
    assert.equal(pointOfInterests.length, testPlacemarks.length);
  });
});
