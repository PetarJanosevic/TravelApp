// https://zellwk.com/blog/endpoint-testing/
// https://bobbyhadz.com/blog/javascript-uncaught-syntaxerror-unexpected-token-export
import { app } from '../src/server/index'
const supertest = require('supertest');
const request = supertest(app)


describe("This tests if the connection, if the GET is even working. Do we successfully fetch the API key?", () => {
    test("If this works, test should return 200, which stands for 'OK' in the world of the internet", async () => {
        const check = request.get('/pixabay-api-key');
        expect((await check).statusCode).toBe(200);
    })
});

