import { render, screen } from "../test-utils/testing-library-utils";
// import userEvent from "@testing-library/user-event";
import App from "../App";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

/**
 *
 */
describe("Gameplay", () => {
  // const user = userEvent.setup();

  test("The board reflects if a letter is typed", () => {
    render(<App />);
    keyboard("c");
    keyboard("{Enter}");

    const tile = screen.getByText("C");
    expect(tile).toBeInTheDocument();
  });

  test.each(["C", "R", "A", "T", "E"])(
    "The board reflects if multiple letter are typed %p",
    (letter) => {
      render(<App />);
      keyboard(letter);
      expect(screen.getByText(letter)).toBeInTheDocument();
    }
  );

  test("You Won! message displays if the target word is entered", async () => {
    render(<App />);
    keyboard("arise");
    keyboard("{Enter}");
    const message = await screen.findByText("You Won!", {}, { timeout: 2000 });
    expect(message).toBeInTheDocument();
  });
});
