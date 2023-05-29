export function getServerNameByPlatform(platform) {
	console.log(
		'🚀 ~ file: getServerNameByPlatform.js:2 ~ getServerNameByPlatform ~ platform:',
		platform
	)

	if (
		platform === 'NA1' ||
		platform === 'LA1' ||
		platform === 'LA2' ||
		platform === 'BR1'
	)
		return 'americas'

	if (platform === 'JP1' || platform === 'KR') return 'asia'

	if (
		platform === 'EUN1' ||
		platform === 'EUW1' ||
		platform === 'TR1' ||
		platform === 'RU'
	)
		return 'europe'

	if (platform === 'OC1') return 'sea'

	return 'sea'
}
