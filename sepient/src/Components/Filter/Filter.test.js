import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "./Filter";

test("renders learn react link", () => {
  render(<Filter />);
  expect(screen.getByText("Filters")).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<Filter />);
});
