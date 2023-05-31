<template>
	<div :class="['py-2 sm:px-2 min-[540px]:grid sm:gap-x-3 gap-x-1 w-full items-center bg-gradient-to-r', {
		'min-[1220px]:grid-cols-[1.5fr_1fr_0.75fr_1fr] min-[920px]:grid-cols-[1.5fr_1fr_0.75fr] grid-cols-[1.5fr_0.75fr] pl-2 pr-0': !reverse,
		'flex-row-reverse min-[1220px]:grid-cols-[1fr_0.75fr_1fr_1.5fr] min-[920px]:grid-cols-[0.75fr_1fr_1.5fr] grid-cols-[0.75fr_1.5fr] pl-0 pr-2': reverse,
		'from-blue-500 from-[-400%] to-transparent': command === 100,
		'from-transparent to-red-500 to-[400%]': command === 200
	}]">
		<div :class="['flex items-center gap-x-2 h-full overflow-x-hidden', {
			'order-1': !reverse,
			'flex-row-reverse text-right order-4': reverse
		}]">
			<router-link :to="`/champion/${participant.championName}`">
				<img
					class="sm:min-h-[3.5em] sm:max-h-[3.5em] min-h-[2.5em] max-h-[2.5em] h-full sm:min-w-[3.5em] sm:max-w-[3.5em] min-w-[2.5em] max-w-[2.5em] w-full"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/` + getChampionFullImageByKey(participant.championId)"
					alt="" />
			</router-link>

			<div class="h-full flex flex-col justify-between min-[540px]:gap-y-0 gap-y-[2px]">
				<router-link :to="`/player/${playerServer}/${participant.summonerName}`" :class="['min-[1300px]:text-lg sm:text-base text-sm inline-block max-w-[135px] text-ellipsis overflow-x-hidden whitespace-nowrap', {
					'font-medium text-purple-600': participant.summonerName === summonerName
				}]">
					{{
						participant.summonerName
					}}
				</router-link>

				<div class="min-[540px]:hidden flex min-[540px]:gap-x-1 gap-x-0">
					<div class="min-[540px]:hidden flex gap-x-1 lg:text-lg sm:text-base text-sm text-gray-800">
						<div class="">{{ participant.kills }}</div>
						<span> / </span>
						<div class="">{{ participant.deaths }}</div>
						<span> / </span>
						<div class="">{{ participant.assists }}</div>
					</div>

					<PlayerViewKDA :kills="participant.kills" :deaths="participant.deaths" :assists="participant.assists" />
				</div>

				<div :class="['flex min-[540px]:gap-x-3 gap-x-1', { 'flex-row-reverse': reverse }]">
					<div class="flex gap-x-1 items-center">
						<!-- <PlayerViewPerk :perk="participant.perks.styles[0]"/> -->
						<img class="w-4 h-4 min-[540px]:w-5 min-[540px]:h-5"
							:src="`https://ddragon.canisback.com/img/${getRuneIcon(participant.perks.styles[0].style).icon}`"
							:alt="getRuneIcon(participant.perks.styles[0].style).name">

						<img class="w-4 h-4"
							:src="`https://ddragon.canisback.com/img/${getRuneIcon(participant.perks.styles[1].style).icon}`"
							:alt="getRuneIcon(participant.perks.styles[1].style).name">
					</div>


					<div class="flex gap-x-1">
						<!-- <PlayerViewSpell :id="participant.summoner1Id"/> -->
						<img class="w-4 h-4 min-[540px]:w-5 min-[540px]:h-5"
							:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${test(participant.summoner1Id).image.full}`"
							alt="">

						<img class="w-4 h-4 min-[540px]:w-5 min-[540px]:h-5"
							:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${test(participant.summoner2Id).image.full}`"
							alt="">
					</div>
				</div>
			</div>
		</div>

		<div
			:class="['min-[920px]:flex hidden gap-x-1 gap-y-1 max-w-[8em] flex-wrap', { 'order-2': !reverse, 'flex-row-reverse order-3': reverse }]">
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

		<div :class="['min-[540px]:inline-block hidden text-center min-[1440px]:min-w-[8em]', {
			'order-3 ': !reverse,
			'order-2': reverse
		}]">
			<div class="flex gap-x-1 justify-center lg:text-lg sm:text-base text-xs text-gray-800">
				<div class="">{{ participant.kills }}</div>
				<span> / </span>
				<div class="">{{ participant.deaths }}</div>
				<span> / </span>
				<div class="">{{ participant.assists }}</div>
			</div>

			<PlayerViewKDA :kills="participant.kills" :deaths="participant.deaths" :assists="participant.assists" />

		</div>

		<div
			:class="['min-[1220px]:inline-block hidden text-center min-[1440px]:min-w-[8em]', { 'order-4': !reverse, 'order-1': reverse }]">
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
			// console.log(summonerId);

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
			// console.log("🚀 ~ file: PlayerViewMatchItem.vue:147 ~ getChampionFullImageByKey ~ key:", key)

			const result = Object.values(champions.data).find(item => {
				return item.key === String(key)
			})

			if (!result) return ''

			return result.image.full
		}
	}
}
</script>
