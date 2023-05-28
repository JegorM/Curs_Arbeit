<template>
	<template v-if="arts !== null">
		<div class="containerArt">
			<div class="nameChamp">{{ $route.params.id }}</div>
			<div class="artChamp">
				<div class="loreChemp">{{ arts.lore }}</div>
				<!-- {{ arts.stats }}  -->
				<img
					:src="`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.championID}_0.jpg`"
					class="champImg"
				/>
			</div>

			<div class="spellsChamp">
				<div class="abilityAndName">
					<div>{{ arts.passive.name }}</div>
					<img
						:src="`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/passive/${arts.passive.image.full}`"
					/>
				</div>
				<div class="textAbility">
					{{ arts.passive.description.replace(/<\/?[^>]+(>|$)/g, '') }}
				</div>
			</div>

			<div
				v-for="spell in arts.spells"
				:key="spell.id"
				class="spellsChamp"
			>
				<div class="abilityAndName">
					<div>{{ spell.name }}</div>
					<img
						:src="`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${spell.id}.png`"
					/>
				</div>
				<div>Coldown skills: {{ spell.cooldownBurn }}</div>
				<div>Mana cost: {{ spell.costBurn }}</div>
				<div class="textAbility">
					{{ spell.description.replace(/<\/?[^>]+(>|$)/g, '') }}
				</div>
			</div>

			{{ arts.skins.name }}
		</div>
	</template>
</template>

<script>
import { getChampionsArt } from '../js/championsArt.js'

export default {
	data() {
		return {
			arts: null
		}
	},

	mounted() {
		this.championID = this.$route.params.id

		getChampionsArt(this.championID).then(data => {
			this.arts = data
			console.log(data)
		})
	}
}
</script>

<style src="../style/views/championView.css"></style>
