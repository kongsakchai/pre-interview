import { merge } from "./merge";

it("merge 0-4 with 5-9", () => {
  const collection_1 = [0, 1, 2, 3, 4];
  const collection_2 = [5, 6, 7, 8, 9];
  const result = merge(collection_1, collection_2);
  expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it("merge 5-9 with 0-4", () => {
  const collection_1 = [5, 6, 7, 8, 9];
  const collection_2 = [0, 1, 2, 3, 4];
  const result = merge(collection_1, collection_2);
  expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it("merge 0,3,4,7,9 with 1,2,5,6,8", () => {
  const collection_1 = [0, 3, 4, 7, 9];
  const collection_2 = [1, 2, 5, 6, 8];
  const result = merge(collection_1, collection_2);
  expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it("merge 0,0,0,1,1 with 0,0,1,1,1", () => {
  const collection_1 = [0, 0, 0, 1, 1];
  const collection_2 = [0, 0, 1, 1, 1];
  const result = merge(collection_1, collection_2);
  expect(result).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
});

it("merge 0,1,3,5,6,8,9 with 2,4,7", () => {
  const collection_1 = [0, 1, 3, 5, 6, 8, 9];
  const collection_2 = [2, 4, 7];
  const result = merge(collection_1, collection_2);
  expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it("merge 2,4,7 with 0,1,3,5,6,8,9", () => {
  const collection_1 = [2, 4, 7];
  const collection_2 = [0, 1, 3, 5, 6, 8, 9];
  const result = merge(collection_1, collection_2);
  expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
