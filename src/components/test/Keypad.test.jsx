import { screen, render } from "../../test-utils/testing-library-utils";
import Keypad from "../Keypad";
import { keyboardLetters } from "../../utilities/letters";

describe("keypad loads correctly", () => {
  test("keypad element exists", () => {
    render(<Keypad usedKeys={{}} />);
    const keypad = screen.getByTitle("keypad");
    expect(keypad).toBeInTheDocument();
  });

  test("an element exists for each letter in the keypad", () => {
    render(<Keypad usedKeys={{}} />);
    keyboardLetters.forEach((letter) => {
      const letterElement = screen.getByText(letter.key);
      expect(letterElement).toBeInTheDocument();
    });
  });
});
