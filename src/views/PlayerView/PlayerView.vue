<template>
	<div class="sm:max-w-[1440px] w-full min-[1440px]:px-0 sm:px-2">
		<div :class="[' w-full h-full bg-white sm:mt-10 mt-5 sm:rounded-lg shadow-[0px_0px_15px] shadow-slate-200']">
			<template v-if="playerInfo !== null && loaded">

				<PlayerViewHead :playerInfo="playerInfo" :playerServer="serverCode" />

				<PlayerViewMathes :matchesInfo="matchesInfo" :summonerName="playerInfo.name" :playerServer="serverCode" />
			</template>

			<div class="text-xl text-center py-6 px-10" v-else-if="loaded">Player <span class="font-bold text-red-600">{{
				this.playerName
			}}</span> not

				found!
			</div>

			<div v-else class="flex items-center justify-center py-10 px-12 stroke-purple-600">
				<svg width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fill-rule="evenodd">
						<g transform="translate(1 1)" stroke-width="2">
							<circle cx="5" cy="50" r="5">
								<animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear"
									repeatCount="indefinite" />
								<animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear"
									repeatCount="indefinite" />
							</circle>
							<circle cx="27" cy="5" r="5">
								<animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear"
									repeatCount="indefinite" />
								<animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear"
									repeatCount="indefinite" />
							</circle>
							<circle cx="49" cy="50" r="5">
								<animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear"
									repeatCount="indefinite" />
								<animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear"
									repeatCount="indefinite" />
							</circle>
						</g>
					</g>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */

import {
	searchPlayers,
	searchMatches,
	infoAbuttMatch
} from '../../js/PlayerAndMatches'

import PlayerViewHead from './components/PlayerViewHead.vue'
import PlayerViewMathes from './components/PlayerViewMathes.vue'

import matchesInfo from './matchesInfo.json'

export default {
	components: { PlayerViewHead, PlayerViewMathes },
	data() {
		return {
			playerName: '',
			serverCode: '',
			playerInfo: null,
			loaded: false,
			playerMathesId: null,
			matchesInfo: [],
		}
	},
	beforeRouteUpdate(to) {
		this.playerName = to.params.playerName;
		this.serverCode = to.params.serverCode;

		this.load()
	},
	mounted() {
		this.playerName = this.$route.params.playerName;
		this.serverCode = this.$route.params.serverCode;

		this.load()
	},
	methods: {
		load() {
			this.matchesInfo = []
			this.playerInfo = null
			this.loaded = false

			searchPlayers(this.playerName, this.serverCode)
				.then(data => {
					this.playerInfo = data
					this.loaded = true

					return data
				})
				.then(playerInfo => {
					if (playerInfo === null) return []

					return searchMatches(playerInfo.puuid, this.serverCode)
				})
				.then(async (matchesIds) => {
					this.playerMathesId = matchesIds

					const items = await Promise.all(matchesIds.slice(0, 3).map(async (element) => {
						return await infoAbuttMatch(element, this.serverCode)
					}))

					this.matchesInfo = items
					// console.log(items)

					// matchesIds.slice(0, 3).forEach(element => {
					// 	console.log("🚀 ~ file: PlayerView.vue:112 ~ matchesIds.slice ~ element:", element)
					// 	infoAbuttMatch(element, this.serverCode).then(data => {
					// 		console.log("🚀 ~ file: PlayerView.vue:114 ~ infoAbuttMatch ~ data:", data)
					// 		this.matchesInfo.push(data)
					// 	})
					// })
				})
		}
	}
}
</script>

