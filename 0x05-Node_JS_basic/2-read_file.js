const fs = require('fs');

const countStudents = (path) => {
  let data;
  let noOfStudents;
  const studentsInMajor = {};
  try {
    data = fs.readFileSync(path, 'utf8');
    data = data.split('\n');
    data.shift();
    noOfStudents = data.length;

    console.log('Number of students:', noOfStudents);

    for (let i = 0; i < data.length; i += 1) {
      const student = data[i].split(',');
      const major = student.at(-1);
      const firstName = student.at(0);

      if (Object.keys(studentsInMajor).includes(major)) {
        studentsInMajor[major].push(firstName);
      } else {
        studentsInMajor[major] = [firstName];
      }
    }

    Object.keys(studentsInMajor).forEach((key) => {
      process.stdout.write(`Number of students in ${key}: ${studentsInMajor[key].length}. List: `);
      for (let i = 0; i < studentsInMajor[key].length; i += 1) {
        process.stdout.write(studentsInMajor[key][i]);
        if (i === studentsInMajor[key].length - 1) {
          console.log();
        } else {
          process.stdout.write(', ');
        }
      }
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
