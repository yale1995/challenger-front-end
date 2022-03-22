import { render, screen } from "@testing-library/react";
import { Header } from "./index";

describe("Header Component", () => {
  it("renders correctly", () => {
    render(<Header />);

    expect(screen.getByText("Pacote de Stickers")).toBeInTheDocument();
  });
});
