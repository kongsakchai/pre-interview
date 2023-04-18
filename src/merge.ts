export interface Merge {
  (collection_1: number[], collection_2: number[]): number[];
}

export const merge: Merge = (collection_1, collection_2) => {
  let i = 0;
  let j = 0;
  let collection: number[] = [];

  while (i < collection_1.length || j < collection_2.length) {
    if (i >= collection_1.length) {
      collection.push(collection_2[j]);
      j++;
    } else if (j >= collection_2.length) {
      collection.push(collection_1[i]);
      i++;
    } else {
      if (collection_1[i] < collection_2[j]) {
        collection.push(collection_1[i]);
        i++;
      } else {
        collection.push(collection_2[j]);
        j++;
      }
    }
  }

  return collection;
};
