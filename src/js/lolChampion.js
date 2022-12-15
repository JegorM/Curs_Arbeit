const LOL_CHAMPIONS_URL =
  "http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json";

function getChampionsList() {
  return fetch(LOL_CHAMPIONS_URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      return Object.values(result.data);
    })
    .catch((error) => {
      throw new Error("Some gonna wrong)" + error);
    });
}

export { getChampionsList };
