<template>
	<template v-if="matchInfoFormated">
		<div class="px-5">
			<div class="flex justify-between items-center pb-[2px]">
				<div
					class="w-1/2 rounded-t-xl py-3 px-3 flex gap-x-20 items-center bg-gradient-to-r from-blue-500 from-[-400%] to-transparent">
					<div class="text-blue-800 rounded-xl px-3 py-1">Blue team</div>

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

				<div
					class="w-1/2 rounded-t-xl py-3 px-3 flex flex-row-reverse items-center gap-x-20 bg-gradient-to-r to-red-500 to-[400%] from-transparent">
					<div class="text-red-800 rounded-xl px-3 py-1">Red team</div>

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

			<div class="flex flex-col gap-y-[2px]">
				<div class="flex justify-between" v-for="(_, index) in matchInfoFormated[100]"
					:key="matchInfoFormated[100][index].puuid">
					<PlayerViewMatchItem :participant="matchInfoFormated[100][index]" :matchesInfo="matchInfo" :command="100"
						:summonerName="summonerName" :playerServer="playerServer" />

					<PlayerViewMatchItem :participant="matchInfoFormated[200][index]" :matchesInfo="matchInfo" :command="200"
						:reverse="true" :summonerName="summonerName" :playerServer="playerServer" />
				</div>
			</div>

			<div class="flex mt-[2px] ">
				<div
					class="w-full rounded-b-xl py-2 bg-gradient-to-r from-blue-500 from-[-200%] to-red-500 to-[200%] via-[50%] via-transparent flex items-center justify-center">
					<div class="flex gap-x-2">
						<div class="text-slate-600">{{ gameCreationDate }}</div>
						<div class="text-slate-800">{{ gameCreationTime }}</div>
						<div class="text-slate-400">-</div>
						<div class="text-purple-500">{{ gameDuration }}</div>
					</div>
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
	props: ['matchInfo', 'summonerName', 'playerServer'],
	computed: {
		gameCreationDate() {
			const data = new Date(this.matchInfo.info.gameCreation)
			return data.toLocaleDateString('en-GB', { timeZone: 'UTC' })
		},

		gameCreationTime() {
			const data = new Date(this.matchInfo.info.gameCreation)

			return data.toLocaleTimeString('en-US', { timeZone: 'UTC' })
		},

		gameDuration() {
			const data = new Date(this.matchInfo.info.gameDuration * 1000)


			return data.toLocaleTimeString('en-GB', { timeZone: 'UTC', timeStyle: 'medium' })
		},

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

			// console.log("🚀 ~ file: PlayerViewMathes.vue:49 ~ matchesInfoFormated ~ result:", result)

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

