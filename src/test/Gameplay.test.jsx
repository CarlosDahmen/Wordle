import { render, screen } from "../test-utils/testing-library-utils";
// import userEvent from "@testing-library/user-event";
import App from "../App";

test("Gameplay golden path", () => {
  // const user = userEvent.setup();

  render(<App />);

  const header = screen.getByRole("heading", { name: "WORDLE" });
  console.log(header);

  //app loads correctly
  expect(header).toBeInTheDocument();

  //grid loads correctly

  //keypad loads correctly

  //
});
