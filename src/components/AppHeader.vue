<template>
	<header class="bg-sky-500 shadow-lg px-6 w-full">
		<div class="max-w-[1440px] mx-auto py-4 max-md:pb-0 flex justify-between gap-x-3 md:gap-x-0">
			<div class="flex lg:gap-x-24 min-[920px]:gap-x-16 gap-x-6">
				<router-link class="sm:text-4xl text-3xl font-medium text-whitegroup group" to="/">
					<span class="max-sm:hidden text-white group-hover:text-green-400 transition-all">Jungle</span>
					<span class="sm:hidden text-white group-hover:text-green-400 transition-all">Jg</span>
					<span class="max-sm:hidden text-yellow-400 group-hover:text-white transition-all">Diff</span>
					<span class="sm:hidden text-yellow-400 group-hover:text-white transition-all">Df</span>
				</router-link>

				<nav class="max-md:hidden flex gap-x-1">
					<router-link class="text-lg text-slate-200 py-2 max-md:py-1 px-4 transition-all" to="/"
						active-class="nav-active">
						Home
					</router-link>

					<router-link class="text-lg text-slate-200 py-2 max-md:py-1 px-4 transition-all" to="/top-players"
						active-class="nav-active">
						Top players
					</router-link>
				</nav>
			</div>

			<div class="inline-flex">
				<input class="px-4 py-2 rounded-l-xl text-gray-700 max-w-[250px] w-full" v-model="searchPlayerMessage"
					type="search" placeholder="search for a player" @keydown.enter="searchPlayer" />
				<div>
					<select
						class="md:px-2 md:text-base appearance-none text-sm h-full min-w-10 py-2 px-2 rounded-r-xl bg-slate-200 text-slate-700"
						v-model="selectValue">
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

		<div class="py-1">
			<nav class="max-md:flex w-full items-center justify-center hidden gap-x-1">
				<router-link class="text-lg text-slate-200 py-2 max-md:py-1 px-4 transition-all" to="/" active-class="nav-active">
					Home
				</router-link>

				<router-link class="text-lg text-slate-200 py-2 max-md:py-1 px-4 transition-all" to="/top-players"
					active-class="nav-active">
					Top players
				</router-link>
			</nav>
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
