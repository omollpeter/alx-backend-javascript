interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "Peter",
    lastName: "Omollo",
    age: 26,
    location: "Nairobi"
};

let student2: Student = {
    firstName: "Rose",
    lastName: "Wambui",
    age: 25,
    location: "Thika"
};

let studentsList: Student[] = [student1, student2];

function renderTable(data: Student[]): void {
    const table = document.createElement("table");
    table.style.border = "1";

    const headerRow = document.createElement("tr");
    const headers = ["First Name", "Last Name", "Age", "Location"];
    headers.forEach(headerText => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    data.forEach(student => {
        const studentRow = document.createElement("tr");
        const firstName = document.createElement("td");
        firstName.textContent = student.firstName;
        studentRow.appendChild(firstName);

        const lastName = document.createElement("td");
        lastName.textContent = student.lastName;
        studentRow.appendChild(lastName);

        const age = document.createElement("td");
        age.textContent = student.age.toString();
        studentRow.appendChild(age);

        const location = document.createElement("td");
        location.textContent = student.location;
        studentRow.appendChild(location);

        table.appendChild(studentRow);
    });

    document.body.appendChild(table);
}

renderTable(studentsList);
