import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FirstApp from "../components/FirstApp";

describe("plain old html", () => {
  //plain old html is just a test name
  test("render 'FirstApp Component'", () => {
    render(<FirstApp />);

    const textElement = screen.getByText("FirstApp Component", {
      exact: false,
    });
    expect(textElement).toBeInTheDocument;
  });

  test("render 'Original text'", () => {
    render(<FirstApp />);

    const textElement = screen.getByText("FirstApp Component", {
      exact: false,
    });
    expect(textElement).toBeInTheDocument;
  });

  test("render 'After button click' when button is clicked", () => {
    render(<FirstApp />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const afterClick = screen.getByText("After button click", { exact: false });
    expect(afterClick).toBeInTheDocument;

    const original = screen.queryByText("Original text", { exact: false });
    expect(original).not.toBeInTheDocument;
  });
});

//getBy - throws an error if not found
//queryBy -return null if not found
//findBy - found ? fufilled promised : rejected promise
