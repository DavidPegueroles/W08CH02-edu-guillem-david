// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get(process.env.NEXT_PUBLIC_API, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        tuits: [
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
        ],
      })
    )
  ),
];
