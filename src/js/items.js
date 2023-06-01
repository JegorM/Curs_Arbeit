function getItems() {
	return fetch(
		`http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/item.json`,
		{
			method: 'GET'
		}
	)
		.then(response => response.json())

		.catch(error => {
			throw new Error('Some gonna wrong)' + error)
		})
}

export { getItems }
