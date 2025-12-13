export const deleteAStudent = async (id) => {
  const request = await fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE",
  });
  const data = request.json()
  return data;
};
