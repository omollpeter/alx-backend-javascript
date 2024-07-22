export default function createIteratorObject(report) {
  let all = [];
  for (let [key, value] of Object.entries(report.allEmployees)) {
    all.push(...value);
  }
  return all;
}
