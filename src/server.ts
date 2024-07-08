import express from 'express';
import dotenv from 'dotenv';
import render from './render';

dotenv.config();

const app = express();
const port = process.env.PORT || 3030;

const board = [
  undefined,
  ["R", [4, 1, 8, 7]],
  ["R", [4, 1, 8, 7]],
  ["B", [9, 5, 9, 6]],
  ["B", [3, 9, 3, 9]],
  ["B", [6, 2, 6, 7]],
  ["R", [4, "A", 5, 9]],
  ["B", [4, "A", 5, 9]],
  ["B", [7, 6, 1, 7]],
];

const board1 = [
  ["R", [4, 1, 8, 7]],
];

const bigBoard = [
  ["R", [4, 1, 8, 7]],
  ["R", [4, 1, 8, 7]],
  ["B", [9, 5, 9, 6]],
  ["B", [3, 9, 3, 9]],
  ["B", [6, 2, 6, 7]],
  undefined,
  ["B", [4, "A", 5, 9]],
  ["B", [7, 6, 1, 7]],
  ["R", [4, 1, 8, 7]],
  undefined,
  ["B", [9, 5, 9, 6]],
  ["B", [3, 9, 3, 9]],
  undefined,
  ["R", [4, "A", 5, 9]],
  ["B", [4, "A", 5, 9]],
  ["B", [7, 6, 1, 7]],
  ["R", [4, 1, 8, 7]],
  ["R", [4, 1, 8, 7]],
  ["B", [9, 5, 9, 6]],
  ["B", [3, 9, 3, 9]],
  undefined,
  ["R", [4, "A", 5, 9]],
  ["B", [4, "A", 5, 9]],
  undefined,
  ["R", [4, 1, 8, 7]],
];

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${port}`);
  
  const rendered = render(bigBoard);
  console.log(rendered)
});
