export default function getStudentsByLocation(studentList, location) {
  const studentsInLocation = studentList.filter((student) => student.location === location);

  return studentsInLocation;
}
