import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Given a Home page component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a heading with 'Tuitah' text", () => {
      const text = /tuitah/i;
      render(<Home />);

      const heading = screen.getByRole("heading", { name: text });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and it receives a list of tuits", () => {
    test("Then it should display a list of tuits", () => {
      const tuits = [
        {
          text: "Alejandro no te compres mas bambas",
          likes: 0,
          date: "2022-03-02T20:02:28.763Z",
          id: "621fcd54851bd5b06eb4c8df",
        },
        {
          date: "1111-10-11T00:14:44.000Z",
          text: "Bon dia",
          likes: 234,
          id: "621fcd81f0a087166cd95782",
        },
      ];

      render(<Home tuits={tuits} />);

      const tuitText1 = screen.getByText(tuits[0].text);
      const tuitText2 = screen.getByText(tuits[1].text);

      expect(tuitText1).toBeInTheDocument();
      expect(tuitText2).toBeInTheDocument();
    });
  });
});
