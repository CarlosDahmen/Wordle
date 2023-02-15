import { validInput, validWord, newWord } from "./utils";

describe("validInput function", () => {
  test("if a non valid character is input, function returns false", () => {
    expect(validInput("Backspace")).toBe(false);
    expect(validInput("123456778")).toBe(false);
    expect(validInput(",")).toBe(false);
  });

  test("if a valid character is input, function returns true", () => {
    expect(validInput("a")).toBe(true);
  });
});

describe("validWord function", () => {
  test("if a word is not on the list, function returns false", () => {
    expect(validWord("ASDFG")).toBe(false);
    expect(validWord("123")).toBe(false);
    expect(validWord(".")).toBe(false);
  });

  test("if a word is on the list, function returns true", () => {
    expect(validWord("CRATE")).toBe(true);
  });

  describe("newWord function", () => {
    const randomWord = newWord();
    expect(validWord(randomWord)).toBe(true);
  });
});
