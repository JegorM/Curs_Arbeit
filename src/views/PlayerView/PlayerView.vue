<template>
	<div class="bg-gray-50 py-5 max-w-[1440px] mx-auto">
		<template v-if="playerInfo !== null">

			<PlayerViewHead :playerInfo="playerInfo" />

			<PlayerViewMathes :matchesInfo="matchesInfo" />
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
import { getItems } from '../../js/items.js'

import PlayerViewHead from './components/PlayerViewHead.vue'
import PlayerViewMathes from './components/PlayerViewMathes.vue'

import matchesInfo from './matchesInfo.json'

export default {
	components: { PlayerViewHead, PlayerViewMathes },
	data() {
		return {
			playerName: '',
			playerInfo: null,
			playerMathesId: null,
			matchesInfo: matchesInfo,
			item: null,
		}
	},
	beforeRouteUpdate(to) {
		searchPlayers(to.params.playerName)
			.then(data => {
				this.playerInfo = data
				return data
			})
			.then(data => {
				return searchMatches(data.puuid)
			})
			.then(data => {
				this.playerMathesId = data
				return data
			})
			.then(data => {
				// this.infoAbuttMatch = data;

				data.forEach(element => {
					infoAbuttMatch(element).then(data => {
						this.matchesInfo.push(data)
					})
				})
			})
	},
	mounted() {
		this.playerName = this.$route.params.playerName;

		searchPlayers(this.$route.params.playerName)
			.then(data => {
				this.playerInfo = data
				return data
			})
			.then(data => {
				return searchMatches(data.puuid)
			})
			.then(data => {
				this.playerMathesId = data
				return data
			})
			.then(data => {
				// this.infoAbuttMatch = data;

				// infoAbuttMatch(data[0]).then(data => {
				// 	this.matchesInfo.push(data)
				// })

				// data.forEach(element => {
				// 	infoAbuttMatch(element).then(data => {
				// 		this.matchesInfo.push(data)
				// 	})

				// })

			})
		getItems().then(data => {
			this.item = data
		})
	}

}
</script>

<!-- <style src="../style/views/playerView.css"></style> -->
