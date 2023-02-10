import { render } from "@testing-library/react";
import { GameDetailsProvider } from "../context/GameDetails.jsx";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: GameDetailsProvider, ...options });

export * from "@testing-library/react";

export { renderWithContext as render };
