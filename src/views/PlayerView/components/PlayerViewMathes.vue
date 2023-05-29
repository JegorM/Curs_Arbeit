<template>
	<div class="h-full mx-auto flex flex-col " v-for="matchInfo in matchesInfo" :key="matchInfo.metadata.matchId">
		<PlayerViewMatch :matchInfo="matchInfo" />
		<div class="mt-10 mb-7 w-full bg-gray-200 h-[2px]"></div>
	</div>
</template>

<script>
/* eslint-disable */
import PlayerViewMatch from './PlayerViewMatch.vue'

export default {
	components: { PlayerViewMatch },
	props: ['matchesInfo'],
}
</script>

