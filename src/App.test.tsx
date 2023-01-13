import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

test("Generate button active when charset options selected", () => {
    render(<App />)

    const generateButton = screen.getByTestId("generateButton");
    expect(generateButton).toBeEnabled()
})

test("Generate button disabled when no charset options selected", () => {
    render(<App />)

    const lowerCharset = screen.getByTestId("lowerSwitch");
    const upperCharset = screen.getByTestId("upperSwitch");
    const numbersCharset = screen.getByTestId("numbersSwitch");
    const symbolsCharset = screen.getByTestId("symbolsSwitch");

    userEvent.click(lowerCharset)
    userEvent.click(upperCharset)
    userEvent.click(numbersCharset)
    userEvent.click(symbolsCharset)

    const generateButton = screen.getByTestId("generateButton");
    expect(generateButton).not.toBeEnabled()
})