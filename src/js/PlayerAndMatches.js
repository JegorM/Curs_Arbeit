const ApiToken = process.env.VUE_APP_API_TOKEN

// const PLAYER_ID = `https://ru.api.riotgames.com/lol/summoner/v4/summoners/by-name/Egorka228335?api_key=${ApiToken}`;

// const Matches =
//   "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/7kCL3fDZdwP_HzuPytCym0QW6tIwP-x5X8-8DcRLPrU32tAeUvZSUI9b-a-izEfbkun_AaXd-AyWuA/ids?start=0&count=20";

function searchPlayers(username) {
	return fetch(
		`https://ru.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${ApiToken}`,
		{
			method: 'GET',
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
				'Accept-Language':
					'ru-RU,ru;q=0.9,de-DE;q=0.8,de;q=0.7,ru-UA;q=0.6,en-US;q=0.5,en;q=0.4',
				'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}
	)
		.then(response => response.json())
		.catch(error => {
			throw new Error('Some gonna wrong)' + error)
		})
}

function searchMatches(puuid) {
	return fetch(
		`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${ApiToken}`,
		{
			method: 'GET',
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
				'Accept-Language':
					'ru-RU,ru;q=0.9,de-DE;q=0.8,de;q=0.7,ru-UA;q=0.6,en-US;q=0.5,en;q=0.4',
				'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}
	)
		.then(response => response.json())
		.catch(error => {
			throw new Error('Some gonna wrong)' + error)
		})
}

function infoAbuttMatch(idMatch) {
	return fetch(
		`https://europe.api.riotgames.com/lol/match/v5/matches/${idMatch}?api_key=${ApiToken}`,
		{
			method: 'GET',
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
				'Accept-Language':
					'ru-RU,ru;q=0.9,de-DE;q=0.8,de;q=0.7,ru-UA;q=0.6,en-US;q=0.5,en;q=0.4',
				'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}
	)
		.then(response => response.json())
		.catch(error => {
			throw new Error('Some gonna wrong)' + error)
		})
}

export { searchPlayers, searchMatches, infoAbuttMatch }
