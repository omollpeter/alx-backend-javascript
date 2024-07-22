export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    const index = array.indexOf(value);
    value = appendString + value;
    array[index] = value;
  }

  return array;
}
