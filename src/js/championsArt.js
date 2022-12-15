// const LOL_ART_URL = "../js/championsArt.json";

function getChampionsArt(championId) {
  return fetch(
    `http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/${championId}.json`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((result) => {
      return result.data[championId];
    })
    .catch((error) => {
      throw new Error("Some gonna wrong)" + error);
    });
}

export { getChampionsArt };
