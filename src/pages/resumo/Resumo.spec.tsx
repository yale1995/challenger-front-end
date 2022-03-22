import { render, screen } from "@testing-library/react";
import Resumo from "../../pages";

describe("Resume page", () => {
  it("renders correctly", () => {
    render(<Resumo />);

    expect(screen.getByText("FINALIZAR COMPRA")).toBeInTheDocument();
  });
});
