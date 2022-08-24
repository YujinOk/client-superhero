export const deleteSuperhero = async (variables) => {
  const response = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      mutation Mutation($heroID: DeleteSuperheroInput) {
        deletehero(heroID: $heroID) {
          success
          message
        }
      }
  `,
      variables,
    }),
  });
  const finalResult = await response.json();
  return finalResult;
};
