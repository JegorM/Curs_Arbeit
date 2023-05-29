<template>
	<div class="h-full flex flex-col gap-y-5 bg-white" v-for="matchInfo in matchesInfo" :key="matchInfo.metadata.matchId">
		<!-- <div class="nameStats">
					<div class="team">Team:1</div>
					<div class="items stat">Items</div>
					<div class="kda stat">KDA</div>
					<div class="minions stat">Minions</div>
					<div class="totDamage stat">Total Damage</div>
					<div class="visions stat">Vision</div>
					<div class="totGold stat">Total gold</div>
				</div> -->

		<div class="flex" v-for="participant in matchInfo.info.participants" :key="participant.puuid">
			<PlayerViewMatch :participant="participant" :matchesInfo="matchInfo" v-if="participant.teamId == 100" />
			<PlayerViewMatch class="bg-red-200" :participant="participant" :matchesInfo="matchInfo"
				v-if="participant.teamId == 200" :reverse="true" />

		</div>
	</div>
</template>

<script>
import PlayerViewMatch from './PlayerViewMatch.vue'

export default {
	components: { PlayerViewMatch },
	props: ['matchesInfo'],

}
</script>

