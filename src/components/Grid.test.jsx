import { screen, render } from "@testing-library/react";
import Grid from "./Grid";

test("grid loads correctly", () => {
  render(<Grid guesses={[]} />);
  const grid = screen.getAllByTestId("grid");
  expect(grid.length).toBe(1);
});
