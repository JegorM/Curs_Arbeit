<template>
	<div class="text-base flex gap-x-1 justify-center items-center">
		<span :class="['font-bold', {
			'!text-red-500': kdaValue <= 0.5,
			'!text-pink-500': kdaValue > 0.5 && kdaValue <= 1.0,
			'!text-green-500': kdaValue > 1.0 && kdaValue <= 2.0,
			'!text-sky-500': kdaValue > 2.0 && kdaValue <= Infinity,
		}]">{{ kdaString }}</span>
		<span class="text-sm text-slate-500">KDA</span>
	</div>
</template>

<script>
export default {
	props: ['kills', 'deaths', 'assists'],
	computed: {
		kdaValue() {
			let deaths = this.deaths

			if (this.deaths === 0) {
				deaths = 1
			}

			return (this.kills + this.assists) / deaths
		},

		kdaString() {
			return this.kdaValue.toFixed(1)
		},
	}
}
</script>

