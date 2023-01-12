import { render, screen } from "@testing-library/react";
import App from "./App";

test("All character set options render", () => {
    render(<App />)

    const lowerCharset = screen.getByTestId("lowerSwitch");
    const upperCharset = screen.getByTestId("upperSwitch");
    const numbersCharset = screen.getByTestId("numbersSwitch");
    const symbolsCharset = screen.getByTestId("symbolsSwitch");

    expect(lowerCharset).toBeVisible();
    expect(upperCharset).toBeVisible();
    expect(numbersCharset).toBeVisible();
    expect(symbolsCharset).toBeVisible();
})

test("Password generates on render", () => {
    render(<App />)

    const passwordOutput = screen.getByTestId("passwordField");
    expect(passwordOutput).not.toHaveValue("")
})
