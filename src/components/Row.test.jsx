import { screen, render } from "@testing-library/react";
import Row from "./Row";

test("each row contains 5 div elements", () => {
  render(<Row />);
  const tile = screen.getAllByTestId("tile");
  expect(tile.length).toBe(5);
});
