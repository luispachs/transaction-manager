import {UserRepository} from "../lib/Repository/UserRepository";
let repository:null|UserRepository= null;
afterAll(() => {
    repository = new UserRepository();
});

test("User Repository", () => {
    expect(repository?.getAll()).not.toBe({});
});
beforeAll(() => {
    repository = null;
});