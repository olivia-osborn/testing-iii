// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("toggleLocked()", () => {
  it("toggles lock status when button is clicked and door is closed", () => {
    const { getByText } = render(<Dashboard />);
    const lockButton = getByText(/lock gate/i);
    const closeButton = getByText(/close gate/i);
    fireEvent.click(closeButton);
    expect(getByText(/unlocked/i)).toBeInTheDocument();
    expect(getByText(/closed/i)).toBeInTheDocument();
    fireEvent.click(lockButton);
    expect(getByText(/unlock gate/i)).toBeInTheDocument();
    expect(getByText(/open gate/i)).toBeInTheDocument();
    expect(getByText(/locked/i)).toBeInTheDocument();
    expect(getByText(/closed/i)).toBeInTheDocument();
  });

  it("can't be clicked when gate is open", () => {
    const { getByText } = render(<Dashboard />);
    const lockButton = getByText(/lock gate/i);
    fireEvent.click(lockButton);
    expect(getByText(/unlocked/i)).toBeInTheDocument();
  });
});

describe("toggleClosed()", () => {
  it("toggles closed status when button is clicked and door is unlocked", () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText(/close gate/i);
    fireEvent.click(closeButton);
    expect(getByText(/open gate/i)).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(getByText(/close gate/i)).toBeInTheDocument();
  });
});
