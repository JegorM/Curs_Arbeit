<template>
	<template v-if="arts !== null">
		<div class="mt-10 max-w-[1100px] mx-auto bg-white py-4 px-4 rounded-lg">
			<div class="mx-auto h-[717px] bg-no-repeat relative rounded-lg" :style="{
				'backgroundImage': `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championID}_0.jpg)`
			}">
				<div class="absolute bottom-36 flex gap-x-7 items-center">
					<!-- <img :src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${championID}.png`" alt=""> -->
					<div class="text-white ml-12">
						<div class="text-shadow-md text-5xl">{{ championID }}</div>
						<div class="text-shadow-sm mt-3 max-w-xl drop-shadow-2xl shadow-black z-10">{{ arts.lore }}</div>
					</div>
				</div>
			</div>

			<div class="px-4 py-2 rounded-lg  flex flex-col gap-y-2 mt-5">
				<div class="">
					<div class="text-xl text-transparent font-medium bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">
						Passive</div>
					<div class="flex gap-x-4">
						<img class="mt-1 w-16 h-16 rounded-md"
							:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/passive/${arts.passive.image.full}`" />
						<div class="">
							<div class="text-xl text-slate-900">{{ arts.passive.name }}</div>
							<div class="text-slate-700" v-html="arts.passive.description"></div>
						</div>
					</div>
				</div>

				<div v-for="(spell, spellIndex) in arts.spells" :key="spell.id" class="">
					<div
						class="text-xl text-transparent font-medium bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
						{{ spellsKeys[spellIndex] }}
					</div>

					<div class="flex gap-x-4">
						<img class="mt-1 w-16 h-16 rounded-md"
							:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spell.id}.png`" />
						<div class="">
							<div class="text-xl text-slate-900">{{ spell.name }}</div>
							<div class="text-slate-700" v-html="spell.description"></div>

							<div class="text-slate-500 flex gap-x-3">
								<span>Coldown:</span>
								<span class="inline-flex gap-x-2">
									<span class="text-purple-700 flex gap-x-2" v-for="(n, index) in spell.cooldown" :key="n">
										{{ n }}
										<span class="text-slate-400" v-if="index !== spell.cooldown.length - 1">/</span>
									</span>
								</span>
							</div>

							<div class="text-slate-500 flex gap-x-3">
								<span>Mana cost:</span>
								<span class="inline-flex gap-x-2">
									<span class="text-red-700 flex gap-x-2" v-for="(n, index) in spell.cost" :key="n">
										{{ n }}
										<span class="text-slate-400" v-if="index !== spell.cost.length - 1">/</span>
									</span>
								</span>
							</div>

						</div>
					</div>
				</div>
			</div>

			<!-- {{ arts.skins }} -->
		</div>
	</template>
</template>

<script>
import { getChampionsArt } from '../js/championsArt.js'

export default {
	data() {
		return {
			arts: null,
			championID: '',
			spellsKeys: {
				0: 'Q',
				1: 'W',
				2: 'E',
				3: 'R'
			}
		}
	},

	mounted() {
		this.championID = this.$route.params.id

		getChampionsArt(this.championID).then(data => {
			this.arts = data
			console.log(data)
		})
	},
	methods: {
		getSpellDescription(description) {
			return description
			// return description.replace(/<\/?[^>]+(>|$)/g, '')
		}
	}
}
</script>

<style src="../style/views/championView.css"></style>
