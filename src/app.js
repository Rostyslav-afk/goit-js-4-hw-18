import students from "./data/students.json";
import { postAnStudent } from "./api/postAnStudent";
import { updateAStudent } from "./api/updateAStudent";
import { deleteAStudent } from "./api/deleteAStudent";
import studentsCard from "./handlebars/studentscard.hbs";

const getStudentsBtn = document.querySelector("#get-students-btn");
const addStudentBtn = document.querySelector('button[type="submit"]');

const addStudentForm = document.querySelector("#add-student-form");
const tbody = document.querySelector("tbody");

function getStudents() {
  return Promise.resolve(students);
}

// getStudents().then((res) => console.log(res));

function renderStudents(students) {
  tbody.innerHTML = studentsCard({ students });
}

getStudentsBtn.addEventListener("click", async () => {
  const studentsData = await getStudents();
  renderStudents(studentsData.students);
});

// Функція для додавання нового студента

async function addStudent(e) {
  e.preventDefault();

  const { name, age, course, skills, email, isEnrolled } = e.target.elements;

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

  await postAnStudent(data);
  const studentData = await getStudents();
  renderStudents(studentsData.students);
  addStudentForm.reset();
}

addStudentForm.addEventListener("submit", (e) => addStudent(e));

// Функція для оновлення студента

async function updateStudent(id) {
  const student = students.students.find((s) => s.id === id);

  if (!student) return;

  const newName = prompt("Введи нове ім'я:", student.name);
  const newAge = prompt("Введи новий вік:", student.age);
  const newCourse = prompt("Введи новий курс:", student.course);
  const newSkills = prompt(
    "Введи навички через кому:",
    student.skills.join(", ")
  );
  const newEmail = prompt("Введи email:", student.email);
  const newIsEnrolled = confirm("Чи студент зарахований?");

  const updatedData = {
    name: newName || student.name,
    age: newAge ? Number(newAge) : student.age,
    course: newCourse || student.course,
    skills: newSkills
      ? newSkills
          .split(",")
          .map((c) => c.trim())
          .filter((c) => c.length)
      : student.skills,
    email: newEmail || student.email,
    isEnrolled: newIsEnrolled,
  };

  await updateAStudent(id, updatedData);
  const studentsData = await getStudents();
  renderStudents(studentsData.students);
}

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("editStudentButton")) {
    const id = e.target.dataset.id;
    updateStudent(id);
  }
  if (e.target.classList.contains("deleteStudentButton")) {
    const id = e.target.dataset.id;
    deleteStudent(id);
  }
});

async function deleteStudent(id) {
  const res = await deleteAStudent(id);
  renderStudents(res.students);
}
