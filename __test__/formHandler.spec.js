import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the submit functionality" , () => {
    test("Testing the handleSubmit() function and if it's defined as it should be.", async () => {
        expect(handleSubmit).toBeDefined();
    });
});

