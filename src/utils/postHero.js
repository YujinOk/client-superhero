export const postHero = async (heroInfo) => {
  const response = await fetch("http://localhost:9000/postHero", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(heroInfo),
  });
  return response.json();
};
// postHero();
