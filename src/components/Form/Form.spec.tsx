import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./index";

describe("Form Component", () => {
  it("renders correctly", () => {
    render(<Form />);

    expect(screen.getByText("Quais Stickers:")).toBeInTheDocument();
  });

  it("add react checkbox value to newNameProduct", () => {
    const { getByTestId } = render(<Form />);
    const checkbox = getByTestId("react");

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("add vue checkbox value to newNameProduct", () => {
    const { getByTestId } = render(<Form />);
    const checkbox = getByTestId("vue");

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("add angular checkbox value to newNameProduct", () => {
    const { getByTestId } = render(<Form />);
    const checkbox = getByTestId("angular");

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("increase react sticker quantity", () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId("plus-amount-react");
    const amountInput = getByTestId("amount-input-react") as HTMLInputElement;

    fireEvent.click(button);
    expect(amountInput).toHaveValue(1);
  });

  it("decrease react sticker quantity", () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId("minus-amount-react");
    const amountInput = getByTestId("amount-input-react") as HTMLInputElement;

    fireEvent.click(button);
    expect(amountInput).toHaveValue(0);
  });

  it("remove react sticker quantity", () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId("remove-amount-react");
    const amountInput = getByTestId("amount-input-react") as HTMLInputElement;

    fireEvent.click(button);
    expect(amountInput).toHaveValue(0);
  });

  it("increase vue sticker quantity", () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId("plus-amount-vue");
    const amountInput = getByTestId("amount-input-vue") as HTMLInputElement;

    fireEvent.click(button);
    expect(amountInput).toHaveValue(1);
  });

  it("decrease vue sticker quantity", () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId("minus-amount-vue");
    const amountInput = getByTestId("amount-input-vue") as HTMLInputElement;

    fireEvent.click(button);
    expect(amountInput).toHaveValue(0);
  });

  it("remove vue sticker quantity", () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId("remove-amount-vue");
    const amountInput = getByTestId("amount-input-vue") as HTMLInputElement;

    fireEvent.click(button);
    // expect(amountInput).toHaveValue(0);
  });

  it("increase angular sticker quantity", () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId("plus-amount-angular");
    const amountInput = getByTestId("amount-input-angular") as HTMLInputElement;

    fireEvent.click(button);
    expect(amountInput).toHaveValue(1);
  });

  it("decrease angular sticker quantity", () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId("minus-amount-angular");
    const amountInput = getByTestId("amount-input-angular") as HTMLInputElement;

    fireEvent.click(button);
    expect(amountInput).toHaveValue(0);
  });

  it("remove angular sticker quantity", () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId("remove-amount-angular");
    const amountInput = getByTestId("amount-input-angular") as HTMLInputElement;

    fireEvent.click(button);
    expect(amountInput).toHaveValue(0);
  });
});
