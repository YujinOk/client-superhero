export const fetchSuperHeros = async (searchTerm) => {
  const noSpaceSearchTerm = searchTerm.replace(/\s/g, "%20");

  let url = `https://www.superheroapi.com/api.php/5390008314429413/search/${noSpaceSearchTerm}`;
  try {
    const response = await fetch(url);
    const superHeroData = await response.json();
    const cleanupDataName = superHeroData.results[0].name;
    const cleanupDataPowerstats = superHeroData.results[0].powerstats;
    const cleanupDataImg = superHeroData.results[0].image;
    return {
      name: cleanupDataName,
      powerstats: cleanupDataPowerstats,
      image: cleanupDataImg,
    };
    // return searchText;
  } catch (err) {
    console.error(err);
  }
};
