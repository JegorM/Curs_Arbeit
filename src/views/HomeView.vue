<template>
	<div class="backGroundIkon">
		<template v-if="champions !== null">
			<router-link
				v-for="champion in champions"
				:key="champion.key"
				:to="'/champion/' + champion.id"
				class="ikonChamp"
			>
				<div class="textForIkon">
					<img
						:src="`http://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`"
						alt=""
					/>
					<div>{{ champion.name }}</div>
					<div>{{ champion.tags.join(', ') }}</div>
				</div>
			</router-link>
		</template>
	</div>
</template>

<script>
import { getChampionsList } from '../js/lolChampion.js'

export default {
	data() {
		return {
			champions: null
		}
	},

	mounted() {
		getChampionsList().then(data => {
			this.champions = data
		})
	}
}
</script>

<style src="../style/views/homeView.css"></style>
