import { render, screen } from "@testing-library/react";
import Checkout from "../../pages";

describe("Checkout page", () => {
  it("renders correctly", () => {
    render(<Checkout />);

    expect(screen.getByText("Pacote de Stickers")).toBeInTheDocument();
  });
});
