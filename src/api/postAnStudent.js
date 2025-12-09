export const postAnStudent = (student) => {
  const options = {
    method: "POST",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch("http://localhost:3000/students", options)
    .then((res) => res.json());
};