import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTuit from "../../components/NewTwit/NewTuit";

describe("Given a NewTwit component", () => {
  describe("When a user types in a tuit in the field", () => {
    test("Then the input value should be what the user typed", () => {
      const typed = "Hola";

      render(<NewTuit />);
      const field = screen.getByPlaceholderText(/uwu...?/i);

      userEvent.type(field, typed);

      expect(field).toHaveValue(typed);
    });
  });

  describe("When the user has not yet introduced a value in the field", () => {
    test("Then the submit button should be disabled", () => {
      render(<NewTuit />);

      const submitButton = screen.getByRole("button", { name: /create/i });

      expect(submitButton).toBeDisabled();
    });
  });

  describe("When the user has already introduced a value in the field", () => {
    test("Then the submit button should not be disabled", () => {
      const typed = "Hola";

      render(<NewTuit />);
      const field = screen.getByPlaceholderText(/uwu...?/i);

      userEvent.type(field, typed);

      const submitButton = screen.getByRole("button", { name: /create/i });

      expect(submitButton).not.toBeDisabled();
    });

    test("Then the user could click the submit button", () => {
      const typed = "Hola";

      render(<NewTuit />);
      const field = screen.getByPlaceholderText(/uwu...?/i);

      userEvent.type(field, typed);

      const submitButton = screen.getByRole("button", { name: /create/i });

      userEvent.click(submitButton);
    });
  });
});
