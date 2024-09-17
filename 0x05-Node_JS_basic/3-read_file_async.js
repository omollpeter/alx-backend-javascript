const fs = require('fs').promises;

const countStudents = (path) => new Promise(async (resolve, reject) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');

    const studentsData = lines.slice(1).filter((line) => line);

    console.log(`Number of students: ${studentsData.length}`);

    const studentsByField = {};

    studentsData.forEach((student) => {
      const [firstName, , , field] = student.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    });

    Object.entries(studentsByField).forEach(([field, students]) => {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
    resolve();
  } catch (error) {
    reject(new Error('Cannot load the database'));
  }
});

module.exports = countStudents;
