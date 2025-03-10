import {test} from "@jest/globals";
import {Password} from "../lib/Security/Password";
import expect from "expect";

const data =[
    "lapsDev1308",
    "1234567809",
    "contraseñaDePrueba",
    "abcdefghi",
    "password123",
    "contraseña11233",
    "101291"
]

process.env.ALGT = "sha256"

test.each(data)("Test for password", async (p) => {

         expect( Password.hash(p)).toMatch(new RegExp(/\w+/));

},10)

test.each(data)("Test for password is valid", async (p) => {
        let hashedPassword = Password.hash(p);
        expect( Password.validate(p,hashedPassword)).toBe(true);
});