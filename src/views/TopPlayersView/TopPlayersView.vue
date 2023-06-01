<template>
	<div class="w-full min-[1440px]:px-0 sm:px-2 max-w-[1440px] sm:mt-10 mt-5">
		<div class="sm:py-4 py-2 md:px-4 px-2 bg-white shadow-[0px_0px_15px] shadow-slate-200 sm:rounded-lg">
			<div class="flex items-center gap-x-4 py-2 px-4">
				<select
					class="px-4 md:text-base appearance-none text-sm h-full min-w-10 py-2 rounded-xl bg-slate-100 text-slate-700"
					v-model="currentServer">
					<option value="BR1">BR</option>
					<option value="EUN1">EUN</option>
					<option value="EUW1" selected>EUW</option>
					<option value="JP1">JP</option>
					<option value="KR">KR</option>
					<option value="LA1">LAN</option>
					<option value="LA2">LAS</option>
					<option value="NA1">NA</option>
					<option value="OC1">OC</option>
					<option value="TR1">TR</option>
					<option value="RU">RU</option>
				</select>

				<div v-if="!currentServerData" class="text-lg text-purple-700">Loading...</div>

				<div class="flex items-end gap-x-1" v-if="currentServerData">
					<div class="sm:text-xl text-lg text-red-600 ">{{ currentServerData.tier }}</div>
					<div class="sm:text-sm text-xs text-slate-500">
						<div class="" v-if="currentServerData.queue === 'RANKED_SOLO_5x5'">SoloQ</div>
						<div class="" v-else>Unknown</div>
					</div>
				</div>
				<div class="sm:text-lg min-[480px]:text-base text-sm text-purple-500" v-if="currentServerData">"{{
					currentServerData.name }}"</div>
			</div>

			<div class="mt-4 flex flex-col" v-if="currentServerData">
				<div
					class="md:px-4 px-2 gap-x-2 grid xl:grid-cols-5 lg:grid-cols-[1.5fr_1fr_1fr_1fr] min-[481px]:grid-cols-[1.5fr_1fr_1fr] grid-cols-[1.5fr_1fr] border-b md:py-2 py-1"
					v-for="player in currentServerData.entries" :key="player.summonerId">
					<router-link :to="`player/${currentServer}/${player.summonerName}`" class="sm:text-lg text-base text-slate-800">
						{{ player.summonerName }}
						<span class="sm:text-base text-sm gap-x-1 text-pink-500">{{ player.leaguePoints }}
							<span class="text-slate-500">lp</span>
						</span>
					</router-link>

					<div class="grid grid-cols-2 sm:gap-x-2 gap-x-1">
						<div class="flex sm:gap-x-2 gap-x-1 sm:text-base text-sm">
							<div class="text-green-500">{{ player.wins }}</div>
							<div class="text-slate-400">/</div>
							<div class="text-red-500">{{ player.losses }}</div>
						</div>
						<TopPlayerWinrate :wins="player.wins" :losses="player.losses" />
					</div>

					<div class="max-[480px]:hidden">
						<div
							class="inline sm:text-base text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"
							v-if="player.veteran">Veteran</div>

						<div
							class="inline text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 capitalize"
							v-else-if="player.freshBlood">Fresh blood</div>
					</div>

					<div class="max-lg:hidden">
						<div
							class="inline text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500"
							v-if="player.hotStreak">Hot streak</div>
					</div>

					<div class="max-xl:hidden">
						<div
							class="inline text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600"
							v-if="player.inactive">Inactive</div>
					</div>

				</div>
			</div>

		</div>
	</div>
</template>

<script>
import { getTopPlayersData } from '../../js/PlayerAndMatches'
import TopPlayerWinrate from './components/TopPlayerWinrate.vue'

export default {
	components: { TopPlayerWinrate },
	data() {
		return {
			currentServer: 'EUW1',
			topPlayersData: {}
		}
	},
	mounted() {
		this.getServerData(this.currentServer)
	},
	computed: {
		currentServerData() {
			return this.topPlayersData[this.currentServer]
		},
	},
	methods: {
		getServerData(serverCode) {
			if (this.topPlayersData[serverCode]) return

			getTopPlayersData(serverCode).then(data => {
				this.topPlayersData[serverCode] = data
			})
		}
	},
	watch: {
		currentServer(newCurrentServer) {
			this.getServerData(newCurrentServer)
		}
	}
}
</script>

