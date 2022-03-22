import { render, screen } from "@testing-library/react";
import { ResumeCart } from "./index";

describe("ResumeCart Component", () => {
  it("renders correctly", () => {
    render(<ResumeCart />);

    expect(screen.getByText("Stickers Selecionados:")).toBeInTheDocument();
  });
});
