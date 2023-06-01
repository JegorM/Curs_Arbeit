<template>
	<div class="h-full mx-auto flex flex-col" v-for="matchInfo in matchesInfo" :key="matchInfo.metadata.matchId">
		<PlayerViewMatch :matchInfo="matchInfo" :summonerName="summonerName" :playerServer="playerServer" />
		<div class="mt-5 mb-5 w-11/12 mx-auto bg-gray-200 h-[1px]"></div>
	</div>
</template>

<script>
/* eslint-disable */
import PlayerViewMatch from './PlayerViewMatch.vue'

export default {
	components: { PlayerViewMatch },
	props: ['matchesInfo', 'summonerName', 'playerServer'],
}
</script>

