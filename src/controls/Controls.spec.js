// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Controls from "./Controls";

describe("<Controls />", () => {
  it("should call toggleLock function", () => {
    const toggle = jest.fn();
    const { getByText } = render(<Controls toggle={toggle} />);
    fireEvent.click(getByText(/lock gate/i));
    expect(toggle).toHaveBeenCalled;
  });
});
