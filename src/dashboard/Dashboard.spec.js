// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("toggleLocked()", () => {
  it("toggles lock status when button is clicked", () => {
    const { getByText } = render(<Dashboard />);
    const lockButton = getByText(/lock gate/i);
    const closeButton = getByText(/close gate/i);
    fireEvent.click(closeButton);
    fireEvent.click(lockButton);

    getByText(/unlock gate/i);
  });
});
