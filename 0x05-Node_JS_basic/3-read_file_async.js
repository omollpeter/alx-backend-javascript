const fs = require("fs").promises

const countStudents = (path) => {
    try {
        const data = fs.readFile(path, "utf8")
    } catch (error) {
        throw new Error("Cannot")
    }
}

module.exports = countStudents;
