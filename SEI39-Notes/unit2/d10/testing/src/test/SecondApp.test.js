import { render, screen } from "@testing-library/react";
import SecondApp from "../Components/SecondApp";

describe("async component", () => {
  test("renders item if request suceeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "70", name: "John Doe" }], //high jacking the api GET
    });

    render(<SecondApp />);

    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).not.toHaveLength(0);
  });
});

//unit testing should be self contained, so not to call API
//so we need to mock a server for API (mocking)

//npm run test -- --coverage
