const { Json } = require("sequelize/lib/utils");
const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    // await sequelize.sync({ force: true });
    Band.destroy({ where: {} });
    Musician.destroy({ where: {} });
    Song.destroy({ where: {} });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    const testBand = await Band.create({
      name: "oulahlou",
      genre: "rock",
    });
    expect(testBand.name).toBe("oulahlou");
    expect(testBand.genre).toBe("rock");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const testMusician = await Musician.create({
      name: "bob",
      instrument: "guitar",
    });
    expect(testMusician.name).toBe("bob");
    expect(testMusician.instrument).toBe("guitar");
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    const testBand = await Band.create({
      name: "oulahlou",
      genre: "rock",
    });
    await testBand.update({
      name: "idir",
      gener: "kabyle",
    });
    expect(testBand.name).toBe("idir");
  });

  test("can update a Musician", async () => {
    // TODO - test updating a musician
    const testMusician = await Musician.create({
      name: "bob",
      instrument: "guitar",
    });
    await testMusician.update({
      name: "michael",
      instrument: "drum",
    });
    expect(testMusician.name).toBe("michael");
  });

  test("can delete a Band", async () => {
    // TODO - test deleting a band
    const testBand = await Band.create(
      {
        name: "oulahlou",
        genre: "rock",
      },
      {
        nam: "matoub",
        gener: "chaabi",
      }
    );

    const deleteBand = await testBand.destroy({
      name: "oulahlou",
      genre: "rock",
    });
    expect(deleteBand).toEqual(
      expect.objectContaining({
        name: "oulahlou",
        genre: "rock",
      })
    );
  });

  test("can delete a Musician", async () => {
    // TODO - test deleting a musician
    const testMusician = await Musician.create({
      name: "bob",
      instrument: "guitar",
    });
    const deletMusician = await testMusician.destroy();
    expect(deletMusician).toEqual(
      expect.objectContaining({
        name: "bob",
        instrument: "guitar",
      })
    );
  });
  test("test Band can have many musicians", async () => {
    const band = await Band.create({
      name: "Koulech",
      genre: "tmesskhire",
      showCount: 10,
    });
    const musician1 = await Musician.create({
      name: "moh",
      instrument: "darboka",
      BandId: band.id,
    });
    const musician2 = await Musician.create({
      name: "missipssa",
      instrument: "avendayer",
      BandId: band.id,
    });

    const foundBand = await Band.findOne({
      where: { id: band.id },
      include: Musician,
    });
    expect(await foundBand.Musicians.length).toBe(2);
    console.log(await Band.findAll());

    console.log(JSON.stringify(await foundBand.getMusicians(), null, 2));

    expect(await foundBand.Musicians[0].name).toBe("moh");
    expect(await foundBand.Musicians[1].name).toBe("missipssa");
  });
  //----------------------------
  //----------------------------
  test("Test Band can have many song", async () => {
    const band1 = await Band.create({
      name: "rien",
      genre: "arwah",
      showCount: 90,
    });
    const song1 = await Song.create();
    const song2 = await Song.create();
    await band1.addSong(song1);
    await band1.addSong(song2);

    const foundBand = await Band.findOne({
      where: { id: band1.id },
      include: Song,
    });
    expect(foundBand.Songs.length).toBe(2);
  });
  test("Test Song can have many Bands", async () => {
    const song1 = await Song.create({
      title: "a3yighe",
      year: 2028,
      length: 190,
    });
    const band1 = await Band.create();
    const band2 = await Band.create();
    await song1.addBand(band1);
    await song1.addBand(band2);

    const foundSong = await Song.findOne({
      where: { id: song1.id },
      include: Band,
    });
    expect(foundSong.Bands.length).toBe(2);
  });
});
