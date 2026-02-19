import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders About component with username and city", () => {
  render(<About />);
  expect(screen.getByText(/About Component/i)).toBeInTheDocument();
  expect(screen.getByText(/John Doe lives in New York/i)).toBeInTheDocument();
});
