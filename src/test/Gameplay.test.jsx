import { render, screen, waitFor } from "../test-utils/testing-library-utils";
import App from "../App";
import userEvent from "@testing-library/user-event";

/**
 *
 */
describe("Gameplay", () => {
  let user;
  let keyboard;
  beforeEach(() => {
    user = userEvent.setup();
    keyboard = user.keyboard;
  });

  test("The board reflects if a letter is typed", async () => {
    render(<App />);
    await keyboard("c");

    const tile = screen.getByText("C");
    expect(tile).toBeInTheDocument();
  });

  test.each(["C", "R", "A", "T", "E"])(
    "The board reflects if multiple letter are typed %p",
    async (letter) => {
      render(<App />);
      await keyboard(letter);
      expect(screen.getByText(letter)).toBeInTheDocument();
    }
  );

  test("'You Won!' message displays if the correct word is entered", async () => {
    render(<App />);
    await keyboard("arise");
    await keyboard("{Enter}");
    const message = await screen.findByText("You Won!", {}, { timeout: 2000 });
    expect(message).toBeInTheDocument();
  });

  test("warning message shows if a letter <5 characters long is inputted", async () => {
    render(<App />);
    await keyboard("try");
    await keyboard("{Enter}");
    const warning = screen.getByText("Words must be 5 characters");
    expect(warning).toBeInTheDocument();
  });

  test("warning message shows if a word is input twice", async () => {
    render(<App />);
    await keyboard("while");
    await keyboard("{Enter}");
    await keyboard("while");
    await keyboard("{Enter}");
    const warning = screen.getByText("No repeated words");
    expect(warning).toBeInTheDocument();
  });

  test("'You Lost! message displays if 6 incorrect words are input", async () => {
    render(<App />);

    await keyboard("ACORN");
    await keyboard("{Enter}");
    await keyboard("ACTOR");
    await keyboard("{Enter}");
    await keyboard("ACUTE");
    await keyboard("{Enter}");
    await keyboard("ADAPT");
    await keyboard("{Enter}");
    await keyboard("ADMIT");
    await keyboard("{Enter}");
    await keyboard("ADOBE");
    await keyboard("{Enter}");

    const message = await screen.findByText("You Lost!", {}, { timeout: 2000 });
    expect(message).toBeInTheDocument();
  });

  test("if game is won, clicking play again button restarts the game", async () => {
    render(<App />);
    await keyboard("arise");
    await keyboard("{Enter}");
    const button = await screen.findByText(
      /play again/i,
      {},
      { timeout: 2000 }
    );
    const message = await screen.findByText("You Won!", {}, { timeout: 2000 });
    expect(message).toBeInTheDocument();

    await user.click(button);

    await waitFor(() => {
      expect(screen.queryByText("You Won!")).not.toBeInTheDocument();
    });
  });
});
