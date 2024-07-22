export default function iterateThroughObject(reportWithIterator) {
  let stringList = "";
  for (let i = 0; i < reportWithIterator.length; i++) {
    stringList += reportWithIterator[i];
    if (i < reportWithIterator.length - 1) {
      stringList += " | ";
    }
  }
  return stringList;
}
