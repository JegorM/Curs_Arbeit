<template>
	<div>
		<div class="flex p-5 items-center gap-x-5">
			<img class="lg:w-32 lg:h-32 md:w-28 md:h-28 min-[480px]:w-24 min-[480px]:h-24 h-[5em] w-[5em] rounded-full"
				:src="`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/profileicon/${playerInfo.profileIconId}.png`" alt="" />
			<div class="">
				<div class="lg:text-3xl md:text-2xl sm:text-xl">{{ playerInfo.name }}
					<span class="lg:text-lg min-[480px]:text-base text-sm text-slate-400">{{ playerServer }}</span>
				</div>
				<div class="lg:text-lg min-[480px]:text-base text-sm">Level: {{ playerInfo.summonerLevel }}</div>

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

