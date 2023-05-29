<template>
	<div>
		<div class="flex p-5 items-center gap-x-5">
			<img class="w-32 h-32 rounded-full"
				:src="`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/profileicon/${playerInfo.profileIconId}.png`" alt="" />
			<div class="">
				<div class="text-3xl">{{ playerInfo.name }}
					<span class="text-lg text-slate-400">{{ playerServer }}</span>
				</div>
				<div class="text-lg">Level: {{ playerInfo.summonerLevel }}</div>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'playerInfo', 'playerServer',
	]
}
</script>

