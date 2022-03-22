import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home page", () => {
  it("renders correctly", () => {
    render(<Home />);

    expect(screen.getByText("Quais Stickers:")).toBeInTheDocument();
  });

});
