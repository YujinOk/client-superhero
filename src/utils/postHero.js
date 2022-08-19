export const postHero = async (heroInfo) => {
  const response = await fetch("http://localhost:4000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(heroInfo),
  });
  return response.json();
};
// postHero();
