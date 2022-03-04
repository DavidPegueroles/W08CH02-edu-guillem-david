import { render, screen } from "@testing-library/react";
import TuitComponent from "../../components/TuitComponent/TuitComponent";

describe("Given a getServerSideProps function", () => {
  describe("When it's invoked", () => {
    test("Then it should return an object with property props with a list of tuits", async () => {
      const tuit = {
        text: "Alejandro no te compres mas bambas",
        likes: 0,
        date: "2022-03-02T20:02:28.763Z",
        id: "621fcd54851bd5b06eb4c8df",
      };

      render(<TuitComponent tuit={tuit} />);

      const tuitText = screen.getByText(tuit.text);

      expect(tuitText).toBeInTheDocument();
    });
  });
});
