import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  //first Test
  it("renders", () => {
    render(<About />);
  });

  //Second Test
});