<template>
	<div class="text-base flex gap-x-1 justify-center items-center">
		<span :class="['font-bold', {
			'!text-red-500': kpValue <= 47,
			'!text-pink-500': kpValue > 47 && kpValue <= 52,
			'!text-green-500': kpValue > 52 && kpValue <= 75,
			'!text-sky-500': kpValue > 75 && kpValue <= 100,
		}]">{{ kpString }}</span>
		<span class="text-sm text-slate-500">% KP</span>
	</div>
</template>

<script>
export default {
	props: ['kills', 'assists', 'commandKills'],
	computed: {
		kpValue() {
			return (this.kills + this.assists) * 100 /
				this.commandKills
		},

		kpString() {
			return this.kpValue.toFixed(1)
		},
	}
}
</script>

