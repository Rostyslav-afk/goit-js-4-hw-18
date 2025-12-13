// export const postAnStudent = (student) => {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(student),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   return fetch("http://localhost:3000/students", options)
//     .then((res) => res.json());
// };

export const postAnStudent = async (student) => {
  const options = {
    method: "POST",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const request = await fetch("http://localhost:3000/students", options);
  const data = request.json();
  
  return data;
};