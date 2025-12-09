export const updateAStudent = (id, student) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`http://localhost:3000/students/${id}`, options).then((res) => res.json());
};
