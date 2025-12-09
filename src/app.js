import students from "./data/students.json";
import { postAnStudent } from "./api/postAnStudent";
import studentsCard from "./handlebars/studentscard.hbs";

const getStudentsBtn = document.querySelector("#get-students-btn");
const addStudentBtn = document.querySelector('button[type="submit"]');

const addStudentForm = document.querySelector("#add-student-form");
const tbody = document.querySelector("tbody");

let selectedCardId = null; //якщо тут null то додаємо картку, якщо число то будемо редагувати

function getStudents() {
  return Promise.resolve(students);
}

// getStudents().then(res => console.log(res))

function renderStudents(students) {
  tbody.innerHTML = studentsCard({ students });
}

getStudentsBtn.addEventListener("click", () => {
  getStudents().then((studentsData) => {
    renderStudents(studentsData.students);
  });
});

// Функція для додавання нового студента

function addStudent(e) {
  e.preventDefault();

  const { name, age, course, skills, email, isEnrolled } =
    e.target.elements;

  const data = {
    name: name.value.trim(),
    age: Number(age.value.trim()),
    course: course.value.trim(),
    skills: skills.value
      .split(",")
      .map((c) => c.trim())
      .filter((c) => c.length),
    email: email.value.trim(),
    isEnrolled: isEnrolled.checked,
  };

  // Перевірка

  if (selectedCardId === null) {
    postAnStudent(data).then((res) => {
      renderStudents();
      addStudentForm.reset();
    });
  } else {
    console.log("User wanted to update");
  }
}

addStudentForm.addEventListener("submit", (e) => addStudent(e));

// Функція для оновлення студента

function updateStudent(id) {
  // твій код
}

// Функція для видалення студента

function deleteStudent(id) {
  // твій код
}
