import studentsCard from "./handlebars/studentscard.hbs";
import students from "./data/students.json";

const getStudentsBtn = document.querySelector("#get-students-btn");
const tbody = document.querySelector("tbody");

function getStudents() {
  return Promise.resolve(students);
}

getStudents().then(res => console.log(res))

function renderStudents(students) {
  tbody.innerHTML = studentsCard({ students });
}

getStudentsBtn.addEventListener("click", () => {
  getStudents().then((studentsData) => {
  renderStudents(studentsData.students);
});
});

// Функція для додавання нового студента

function addStudent(e) {}

// Функція для оновлення студента

function updateStudent(id) {
  // твій код
}

// Функція для видалення студента

function deleteStudent(id) {
  // твій код
}
