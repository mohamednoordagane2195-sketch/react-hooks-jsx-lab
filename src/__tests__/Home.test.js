import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("renders Home component with username, city and image", () => {
  render(<Home />);
  expect(screen.getByText(/Home Component/i)).toBeInTheDocument();
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/New York/i)).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src", "https://via.placeholder.com/150");
});
