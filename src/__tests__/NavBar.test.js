import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("renders NavBar with Home and About links", () => {
  render(<NavBar />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});
