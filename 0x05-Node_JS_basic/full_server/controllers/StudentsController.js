import { readDatabase } from "../utils";
import url from "url";

export default class StudentsController {
    static getAllStudents(request, response) {
        const path = process.argv[2];

        readDatabase(path).then((result) => {
            let displayStudents = "This is the list of our students\n";

            Object.keys(result).sort().forEach(field => {
                displayStudents += `Number of students in ${field}: ${result[field].length}. List: ${result[field].join(", ")}\n`
            })
            response.status(200).send(displayStudents);
        }).catch((reason) => {
            response.status(500).send("Cannot load the database");
        })
    }

    static getAllStudentsByMajor(request, response) {
        const queryObject = url.parse(request.url, true).query();

        if (queryObject.major !== "CS" || queryObject.major !== "SWE") {
            response.status(500).send("Major parameter must be CS or SWE")
        }

        const path = process.argv[2];
        readDatabase(path).then((result) => {
            response.status(200).send(`List: ${result[queryObject.major].join(", ")}\n`);
        }).catch(reason => {
            response.status(500).send("Cannot load the database")
        })
    }
}
