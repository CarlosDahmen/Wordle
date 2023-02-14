import { render, screen } from "../test-utils/testing-library-utils";
import Game from "./Game";

describe("<Game />", () => {
  test("Header loads correctly", () => {
    render(<Game />);
    const header = screen.getByRole("heading", { name: "WORDLE" });
    expect(header).toBeInTheDocument();
  });

  test("message element loads correctly", () => {
    render(<Game />);
    const message = screen.getByRole("heading", { level: 2 });
    expect(message).toBeInTheDocument();
  });
});
