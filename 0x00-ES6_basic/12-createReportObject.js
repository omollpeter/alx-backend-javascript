export default function createReportObject(employeesList) {
  const employees = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return employees;
}
