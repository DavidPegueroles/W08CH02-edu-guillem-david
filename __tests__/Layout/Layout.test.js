import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";

describe("Given a Layout component", () => {
  describe("When displayed", () => {
    test("It shoul render a footer with a text `Coded by Pegueroles and Guillem`", () => {
      render(<Layout></Layout>);
      const expectedText = "Coded by Pegueroles and Guillem";

      const foot = screen.getByText(/Coded by Pegueroles and Guillem/i);

      expect(foot).toBe(expectedText);
    });
  });
});
