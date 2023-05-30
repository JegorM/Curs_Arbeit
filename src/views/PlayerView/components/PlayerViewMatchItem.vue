<template>
	<div :class="['py-2 px-2 flex gap-x-3 w-full items-center bg-gradient-to-r', {
		'flex-row-reverse': reverse,
		'from-blue-500 from-[-400%] to-transparent': command === 100,
		'from-transparent to-red-500 to-[400%]': command === 200
	}]">
		<div
			:class="['flex items-center gap-x-2 h-full w-[200px] overflow-x-hidden', { 'flex-row-reverse text-right': reverse }]">
			<router-link :to="`/champion/${participant.championName}`">
				<img class="h-14 w-14"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/` + getChampionFullImageByKey(participant.championId)"
					alt="" />
			</router-link>

			<div class="h-full flex flex-col justify-between">
				<router-link :to="`/player/${playerServer}/${participant.summonerName}`" :class="['text-lg inline-block max-w-[135px] text-ellipsis overflow-x-hidden whitespace-nowrap', {
					'font-medium text-purple-600': participant.summonerName === summonerName
				}]">
					{{
						participant.summonerName
					}}
				</router-link>

				<div :class="['flex gap-x-3', { 'flex-row-reverse': reverse }]">
					<div class="flex gap-x-1 items-center">
						<!-- <PlayerViewPerk :perk="participant.perks.styles[0]"/> -->
						<img class="w-5 h-5"
							:src="`https://ddragon.canisback.com/img/${getRuneIcon(participant.perks.styles[0].style).icon}`"
							:alt="getRuneIcon(participant.perks.styles[0].style).name">

						<img class="w-4 h-4"
							:src="`https://ddragon.canisback.com/img/${getRuneIcon(participant.perks.styles[1].style).icon}`"
							:alt="getRuneIcon(participant.perks.styles[1].style).name">
					</div>


					<div class="flex gap-x-1">
						<!-- <PlayerViewSpell :id="participant.summoner1Id"/> -->
						<img class="w-5 h-5"
							:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${test(participant.summoner1Id).image.full}`"
							alt="">

						<img class="w-5 h-5"
							:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${test(participant.summoner2Id).image.full}`"
							alt="">
					</div>
				</div>
			</div>
		</div>

		<div :class="['gap-x-1 gap-y-1 flex max-w-[8em] flex-wrap', { 'flex-row-reverse': reverse }]">
			<div class="w-7 h-7 bg-gray-50 bg-opacity-60">
				<img class="imgIcon" v-if="participant.item0 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item0}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-50 bg-opacity-60">
				<img class="imgIcon" v-if="participant.item1 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item1}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-50 bg-opacity-60">
				<img class="imgIcon" v-if="participant.item2 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item2}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-50 bg-opacity-60">
				<img class="imgIcon" v-if="participant.item6 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item6}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-50 bg-opacity-60">
				<img class="imgIcon" v-if="participant.item3 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item3}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-50 bg-opacity-60">
				<img class="imgIcon" v-if="participant.item4 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item4}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-50 bg-opacity-60">
				<img class="imgIcon" v-if="participant.item5 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item5}.png`" alt="" />
			</div>

		</div>

		<div class="text-center min-w-[8em]">
			<div class="flex gap-x-1 justify-center text-lg text-gray-800">
				<div class="">{{ participant.kills }}</div>
				<span> / </span>
				<div class="">{{ participant.deaths }}</div>
				<span> / </span>
				<div class="">{{ participant.assists }}</div>
			</div>

			<PlayerViewKDA :kills="participant.kills" :deaths="participant.deaths" :assists="participant.assists" />

		</div>

		<div class="text-center min-w-[8em]">
			<div class=" text-base text-gray-800">
				{{
					participant.totalMinionsKilled +
					participant.neutralMinionsKilled
				}} cs - {{ (participant.goldEarned / 1000).toFixed(1) }}k gold
			</div>

			<PlayerViewKP :kills="participant.kills" :assists="participant.assists"
				:commandKills="this.matchesInfo.info.teams[this.command === 100 ? 0 : 1].objectives.champion.kills" />
		</div>
	</div>
</template>

<script>
import runesData from '../../../data/runes.json'
import summoners from '../../../data/summoners.json'
import champions from '../../../data/champions.json'

import PlayerViewKDA from './PlayerViewKDA.vue'
import PlayerViewKP from './PlayerViewKP.vue'

export default {
	components: { PlayerViewKDA, PlayerViewKP },
	props: ['participant', 'matchesInfo', 'reverse', 'command', 'summonerName', 'playerServer'],
	methods: {
		getRuneIcon(id) {
			const rune = runesData.find(item => item.id === id)

			if (!rune) return {
				icon: '',
				name: 'undefined'
			}

			return {
				icon: rune.icon,
				name: rune.name
			}
		},
		test(summonerId) {
			console.log(summonerId);

			const result = Object.values(summoners.data).find(sum => {
				// console.log("🚀 ~ file: PlayerView.vue:260 ~ result ~ sum:", sum.key)
				// console.log("🚀 ~ file: PlayerView.vue:259 ~ result ~ summonerId:", summonerId)

				return Number(sum.key) === Number(summonerId)
			})

			if (!result) return {
				image: { full: '' }
			}

			return result
		},
		getChampionFullImageByKey(key) {
			console.log("🚀 ~ file: PlayerViewMatchItem.vue:147 ~ getChampionFullImageByKey ~ key:", key)

			const result = Object.values(champions.data).find(item => {
				return item.key === String(key)
			})

			if (!result) return ''

			return result.image.full
		}
	}
}
</script>
