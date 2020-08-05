import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "./Filter";

test("renders learn react link", () => {
  render(<Filter />);
  expect(screen.getByText("Filters")).toBeInTheDocument();
  fireEvent.click(screen.getByText("2009"), {
    currentTarget: { innerText: "2019" },
  });
});

test("renders learn react link", () => {
  render(<Filter />);
  fireEvent.click(screen.getByTestId("launch-true"), {
    currentTarget: { innerText: "True" },
  });
});
