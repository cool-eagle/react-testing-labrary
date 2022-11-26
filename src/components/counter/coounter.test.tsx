import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("counter", () => {
  test('renders correctly', () => {
    render(<Counter />);
    const counterElement = screen.getByRole('heading')
    expect(counterElement).toBeInTheDocument();
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementButton).toBeInTheDocument();
  })

  test('renders a count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  })

  test('render a count of 1 after clicking the increment button', async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    })
    await user.click(incrementButton)
    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent('1')
  })
});