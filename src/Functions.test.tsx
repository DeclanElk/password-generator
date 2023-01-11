import generatePassword from "./Functions";

test("No character sets returns blank", () => {
    expect(generatePassword(false, false, false, false, 10)).toBe("");
})

test("Length of 0 returns blank", () => {
    expect(generatePassword(true, true, true, true, 0)).toBe("");
})

test("Length of 10 returns 10 char string", () => {
    expect(generatePassword(true, true, true, true, 10)).toHaveLength(10);
})

test("Length of 100 returns 100 char string", () => {
    expect(generatePassword(true, true, true, true, 100)).toHaveLength(100);
})

test("Randomness of output with same input", () => {
    expect(generatePassword(true, true, true, true, 10)).not.toEqual(generatePassword(true, true, true, true, 10));
})

test("Contains correct charsets", () => {
    const lowerRegex : RegExp = new RegExp('[a-z]', 'g')
    expect(lowerRegex.test(generatePassword(true, false, false, false, 10))).toEqual(true)

    const upperRegex : RegExp = new RegExp('[A-Z]', 'g')
    expect(upperRegex.test(generatePassword(false, true, false, false, 10))).toEqual(true)

    const numbersRegex : RegExp = new RegExp('[1-9]', 'g')
    expect(numbersRegex.test(generatePassword(false, false, true, false, 10))).toEqual(true)

    const symbolsRegex : RegExp = new RegExp('[!@#$%^&*?;+-]', 'g')
    expect(symbolsRegex.test(generatePassword(false, false, false, true, 10))).toEqual(true)
})