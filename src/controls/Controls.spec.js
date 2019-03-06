// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("should call toggleLock function when lock gate is clicked", () => {
    const toggle = jest.fn();
    const { getByText } = render(<Controls toggle={toggle} />);
    fireEvent.click(getByText(/lock gate/i));
    expect(toggle).toHaveBeenCalled;
  });

  it("should call toggleClosed function when open gate is clicked", () => {
    const toggle = jest.fn();
    const { getByText } = render(<Controls toggle={toggle} />);
    fireEvent.click(getByText(/close gate/i));
    expect(toggle).toHaveBeenCalled;
  });
});
