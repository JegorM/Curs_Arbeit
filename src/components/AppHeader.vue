<template>
	<header class="bg-sky-500 shadow-lg">
		<div class="max-w-[1440px] mx-auto py-4 flex justify-between gap-x-36">
			<router-link class="text-4xl font-medium text-whitegroup group" to="/">
				<span class="text-white group-hover:text-green-400 transition-all">Jungle</span>
				<span class="text-yellow-400 group-hover:text-white transition-all">Diff</span>
			</router-link>

			<div class="inline-flex mr-20">
				<input class="px-4 py-2 rounded-l-xl text-gray-700" v-model="searchPlayerMessage" type="search"
					placeholder="search for a player" @keydown.enter="searchPlayer" />
				<div>
					<select class="px-2 py-2 rounded-r-xl bg-slate-200 text-slate-700" v-model="selectValue">
						<option value="BR1">BR</option>
						<option value="EUN1">EUN</option>
						<option value="EUW1" selected>EUW</option>
						<option value="JP1">JP</option>
						<option value="KR">KR</option>
						<option value="LA1">LAN</option>
						<option value="LA2">LAS</option>
						<option value="NA1">NA</option>
						<option value="OC1">OC</option>
						<option value="TR1">TR</option>
						<option value="RU">RU</option>
					</select>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			searchPlayerMessage: '',
			selectValue: 'RU'
		}
	},
	methods: {
		searchPlayer() {
			this.$router.push(`/player/${this.selectValue}/${this.searchPlayerMessage}`)
		}
	}
}
</script>

<style src="../style/AppHeader.css"></style>
