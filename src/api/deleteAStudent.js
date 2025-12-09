export const deleteAStudent = (id) => {
  return fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
