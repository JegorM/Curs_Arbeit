<template>
	<span :class="['font-bold sm:text-base text-sm', {
		'!text-red-500': winrate <= 49,
		'!text-yellow-500': winrate > 49 && winrate <= 51,
		'!text-green-500': winrate > 51 && winrate <= 55,
		'!text-sky-500': winrate > 55 && winrate <= 61,
		'!text-purple-500': winrate > 61 && winrate <= Infinity,
	}]">
		{{ winrate.toFixed(1) }} %
	</span>
</template>

<script>
export default {
	props: ['wins', 'losses'],
	computed: {
		winrate() {
			return (this.wins / (this.wins + this.losses)) * 100
		},

	}
}
</script>

