import { render, screen } from "@testing-library/react";
import Link from "next/Link";
import Layout from "../../components/Layout";

describe("Given a Layout component", () => {
  describe("When displayed", () => {
    test("It should render the text `Home` with a link", () => {
      render(
        <Layout>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Layout>
      );
      const expectedText = "Home";

      const renderization = screen.getByRole("link", { name: "Home" });

      expect(renderization).toHaveTextContent(expectedText);
    });
  });
});
