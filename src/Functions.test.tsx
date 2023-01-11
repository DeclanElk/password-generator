import generatePassword from "./Functions";

test("No character sets returns blank", () => {
    expect(generatePassword(false, false, false, false, 10)).toBe("");
})