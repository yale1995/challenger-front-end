import { render, screen } from "@testing-library/react";
import { Footer } from "./index";

describe("Footer Component", () => {
  it("renders correctly", () => {
    render(<Footer />);

    expect(screen.getByText("FINALIZAR COMPRA")).toBeInTheDocument();
  });
});
