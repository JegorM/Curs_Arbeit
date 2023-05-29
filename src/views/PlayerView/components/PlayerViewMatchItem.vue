<template>
	<div :class="['flex gap-x-3 w-full items-center', { 'flex-row-reverse': reverse }]">
		<div
			:class="['flex items-center gap-x-2 h-full w-[200px] overflow-x-hidden', { 'flex-row-reverse text-right': reverse }]">
			<img class="h-14 w-14"
				:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${participant.championName}.png`" alt="" />

			<div class="h-full flex flex-col justify-between">
				<div class="text-lg inline-block max-w-[135px] text-ellipsis overflow-x-hidden whitespace-nowrap">{{
					participant.summonerName
				}}</div>

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
			<div class="w-7 h-7 bg-gray-100">
				<img class="imgIcon" v-if="participant.item0 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item0}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-100">
				<img class="imgIcon" v-if="participant.item1 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item1}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-100">
				<img class="imgIcon" v-if="participant.item2 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item2}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-100">
				<img class="imgIcon" v-if="participant.item3 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item3}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-100">
				<img class="imgIcon" v-if="participant.item4 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item4}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-100">
				<img class="imgIcon" v-if="participant.item5 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item5}.png`" alt="" />
			</div>
			<div class="w-7 h-7 bg-gray-100">
				<img class="imgIcon" v-if="participant.item6 != 0"
					:src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${participant.item6}.png`" alt="" />
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

			<div class="text-base">
				{{ ((participant.kills + participant.assists) / participant.deaths).toFixed(1) }}
				<span class="text-sm text-slate-500">KDA</span>
			</div>
		</div>

		<div class="text-center min-w-[8em]">
			<div class=" text-base text-gray-800">
				{{
					participant.totalMinionsKilled +
					participant.neutralMinionsKilled
				}} cs - {{ (participant.goldEarned / 1000).toFixed(1) }}k gold
			</div>
			<div class="text-gray-600 text-base">
				{{ ((participant.kills + participant.assists + participant.deaths) * 100 /
					matchesInfo.info.teams[0].objectives.champion.kills).toFixed(1) }} % KP
			</div>
		</div>
	</div>
</template>

<script>
import runesData from '../../../data/runes.json'
import summoners from '../../../data/summoners.json'


export default {
	props: ['participant', 'matchesInfo', 'reverse'],
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
			const result = Object.values(summoners.data).find(sum => {
				console.log("🚀 ~ file: PlayerView.vue:260 ~ result ~ sum:", sum.key)
				console.log("🚀 ~ file: PlayerView.vue:259 ~ result ~ summonerId:", summonerId)

				return Number(sum.key) === Number(summonerId)
			})

			return result

		}
	}
}
</script>
