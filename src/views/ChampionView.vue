<template>
	<template v-if="arts !== null">
		<div class="max-w-[1100px] px-2 min-[1116px]:px-0">
			<div class="bg-white mt-10 py-4 px-4 rounded-lg shadow-[0px_0px_15px] shadow-slate-200">

				<div class="flex gap-x-7 items-center">
					<img class="rounded-md md:w-24 md:h-24 w-16 h-16"
						:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${championID}.png`" alt="">
					<div class="text-slate-700">
						<div class="md:text-5xl text-2xl">{{ championID }}</div>
					</div>
				</div>


				<div class="mt-5 mx-auto lg:h-[717px] md:h-[550px] h-[450px] bg-no-repeat relative rounded-lg bg-center bg-cover"
					:style="{
						'backgroundImage': `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championID}_0.jpg)`
					}">
					<div
						class="absolute lg:w-3/6 md:w-4/6 md:mr-0 mr-4 md:text-base min-[480px]:text-sm text-xs bg-gray-50 bg-opacity-80 rounded-xl bottom-0 left-0 px-3 py-3 mb-4 ml-4 drop-shadow-2xl shadow-black z-10">
						<div class="text-slate-800">{{ arts.lore }}</div>
					</div>
				</div>

				<div class="md:px-4 py-2 rounded-lg flex flex-col gap-y-3 mt-5">

					<div class="flex gap-x-4 items-center">

						<div class="flex items-center">
							<div class="relative md:w-16 md:h-16 w-12 h-12 rounded-md flex items-center justify-center"
								:style="{ backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/13.10.1/img/passive/${arts.passive.image.full}')` }">
								<div class="bg-gray-800 absolute w-full h-full rounded-md  bg-opacity-30 z-0"></div>
								<div class="text-2xl text-white font-medium z-10">
									P
								</div>
							</div>
						</div>


						<div class="">
							<div class="text-xl text-slate-900">{{ arts.passive.name }}</div>
							<div class="text-slate-700" v-html="arts.passive.description"></div>
						</div>
					</div>

					<div v-for="(spell, spellIndex) in arts.spells" :key="spell.id" class="">
						<div class="flex items-start gap-x-4">

							<div class="flex items-center">
								<div class="relative md:w-16 md:h-16 w-12 h-12 rounded-md flex items-center justify-center"
									:style="{ backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spell.id}.png')` }">
									<div class="bg-gray-800 absolute w-full h-full rounded-md  bg-opacity-30 z-0"></div>
									<div class="text-2xl text-white font-medium z-10">
										{{ spellsKeys[spellIndex] }}
									</div>
								</div>
							</div>

							<div class="w-9/12">
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
			// console.log(data)
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
