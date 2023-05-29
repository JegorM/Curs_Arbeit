<template>
	<template v-if="matchInfoFormated">
		<div class="px-5">
			<div class="py-3 px-3 rounded-t-xl flex justify-between items-center mb-2">
				<div class="flex gap-x-20 items-center">
					<div class="text-blue-800 rounded-xl px-3 py-1 bg-blue-300">Blue team</div>

					<VictoryOrDefeat :win="matchInfo.info.teams[0].win" />

					<div class="flex gap-x-1 justify-center text-lg text-gray-800">
						<div class="">{{ teamsKDA[100].kills }}</div>
						<span> / </span>
						<div class="">{{ teamsKDA[100].deaths }}</div>
						<span> / </span>
						<div class="">{{ teamsKDA[100].assists }}</div>
					</div>

					<div class="">{{ teamsKDA[100].gold }} <span class="text-slate-500">gold</span></div>
				</div>

				<div class="flex flex-row-reverse items-center gap-x-20">
					<div class="text-red-800 rounded-xl px-3 py-1 bg-red-300">Red team</div>

					<VictoryOrDefeat :win="matchInfo.info.teams[1].win" />

					<div class="flex gap-x-1 justify-center text-lg text-gray-800">
						<div class="">{{ teamsKDA[200].kills }}</div>
						<span> / </span>
						<div class="">{{ teamsKDA[200].deaths }}</div>
						<span> / </span>
						<div class="">{{ teamsKDA[200].assists }}</div>
					</div>

					<div class="">{{ teamsKDA[200].gold }} <span class="text-slate-500">gold</span></div>
				</div>
			</div>

			<div class="flex flex-col gap-y-4">
				<div class="flex justify-between" v-for="(_, index) in matchInfoFormated[100]"
					:key="matchInfoFormated[100][index].puuid">
					<PlayerViewMatchItem :participant="matchInfoFormated[100][index]" :matchesInfo="matchInfo" />

					<PlayerViewMatchItem :participant="matchInfoFormated[200][index]" :matchesInfo="matchInfo" :reverse="true" />
				</div>
			</div>
		</div>
	</template>
</template>

<script>
import PlayerViewMatchItem from './PlayerViewMatchItem.vue'
import VictoryOrDefeat from './VictoryOrDefeat.vue'

export default {
	components: { PlayerViewMatchItem, VictoryOrDefeat },
	props: ['matchInfo'],
	computed: {
		matchInfoFormated() {
			if (!this.matchInfo) return this.matchInfo

			const participants = this.matchInfo.info.participants

			if (!participants) {
				return participants
			}

			const result = {
				100: [],
				200: []
			}

			participants.forEach(participant => {
				result[participant.teamId].push(participant)
			})

			console.log("🚀 ~ file: PlayerViewMathes.vue:49 ~ matchesInfoFormated ~ result:", result)

			return result
		},
		teamsKDA() {
			const result = {
				100: {
					kills: 0,
					deaths: 0,
					assists: 0,
					gold: 0
				},
				200: {
					kills: 0,
					deaths: 0,
					assists: 0,
					gold: 0
				}
			}

			const participants = this.matchInfo.info.participants

			if (!participants) {
				return result
			}

			participants.forEach(participant => {
				result[participant.teamId].kills += participant.kills
				result[participant.teamId].deaths += participant.deaths
				result[participant.teamId].assists += participant.assists
				result[participant.teamId].gold += participant.goldEarned
			})

			return result
		}
	}
}
</script>

