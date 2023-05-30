<template>
	<div class="pb-5 max-w-[1440px] mx-auto bg-white mt-10 rounded-lg shadow-[0px_0px_15px] shadow-slate-200">
		<template v-if="playerInfo !== null">

			<PlayerViewHead :playerInfo="playerInfo" :playerServer="serverCode" />

			<PlayerViewMathes :matchesInfo="matchesInfo" :summonerName="playerInfo.name" :playerServer="serverCode" />
		</template>

		<div class="text-xl text-center" v-else>Player <span class="font-bold text-red-600">{{
			this.playerName
		}}</span> not

			found!
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
			playerMathesId: null,
			matchesInfo: [],
		}
	},
	beforeRouteUpdate(to) {
		this.playerName = to.params.playerName;
		this.serverCode = to.params.serverCode;

		this.matchesInfo = []

		searchPlayers(this.playerName, this.serverCode)
			.then(data => {
				this.playerInfo = data

				return data
			})
			.then(playerInfo => {
				return searchMatches(playerInfo.puuid, this.serverCode)
			})
			.then(matchesIds => {
				this.playerMathesId = matchesIds


				matchesIds.slice(0, 3).forEach(element => {
					infoAbuttMatch(element, this.serverCode).then(data => {
						this.matchesInfo.push(data)
					})
				})
			})
	},
	mounted() {
		this.playerName = this.$route.params.playerName;
		this.serverCode = this.$route.params.serverCode;

		searchPlayers(this.playerName, this.serverCode)
			.then(data => {
				this.playerInfo = data

				return data
			})
			.then(playerInfo => {
				return searchMatches(playerInfo.puuid, this.serverCode)
			})
			.then(matchesIds => {
				this.playerMathesId = matchesIds


				matchesIds.slice(0, 3).forEach(element => {
					infoAbuttMatch(element, this.serverCode).then(data => {
						this.matchesInfo.push(data)
					})
				})
			})

	}

}
</script>

<!-- <style src="../style/views/playerView.css"></style> -->
