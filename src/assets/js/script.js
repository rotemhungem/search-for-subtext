function getIndexes(subText, text) {
  const indexes = [];
  let index = text.indexOf(subText, 0);
  while (index > -1) {
      indexes.push(index);
      index+=1;
      index = text.indexOf(subText, index);
  }
  return indexes;
}
