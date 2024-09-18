const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand= await Band.create({
            name:'oulahlou',
            genre:"rock"
        })
        expect(testBand.name).toBe('oulahlou');
        expect(testBand.genre).toBe('rock');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({
            name:"bob",
            instrument:"guitar"
        })
        expect(testMusician.name).toBe('bob');
        expect(testMusician.instrument).toBe('guitar');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const testBand= await Band.create({
            name:'oulahlou',
            genre:"rock"
        })
        testBand.update({
            name:"idir",
            gener:"kabyle"
        })
        expect(testBand.name).toBe('idir');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})