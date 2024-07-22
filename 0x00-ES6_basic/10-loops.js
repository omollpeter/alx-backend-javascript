export default function appendToEachArrayValue(array, appendString) {
  for (let [index, value] of array.entries()) {
    value = appendString + value;
    array[index] = value;
  }

  return array;
}
