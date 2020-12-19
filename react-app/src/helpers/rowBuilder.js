export const rowBuilder = (elements, maxElementsPerRow = 3) => {
  const array = [];

  let row = [];
  let index = 0;
  while (array.length < Math.floor(elements.length / maxElementsPerRow)) {
    row.push(elements[index])

    if (row.length === maxElementsPerRow) {
      array.push(row);
      row = [];
    }
    
    index++;
  }

  if (index < elements.length) {
    array.push(elements.slice(index, elements.length))
  }

  return array;
};
