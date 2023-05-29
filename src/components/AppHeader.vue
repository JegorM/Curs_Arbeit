<template>
	<header class="bg-sky-500 shadow-lg">
		<div class="max-w-[1440px] mx-auto py-4 flex justify-between gap-x-36">
			<router-link class="text-4xl font-medium text-whitegroup group" to="/">
				<span class="text-white group-hover:text-green-400 transition-all">Jungle</span>
				<span class="text-yellow-400 group-hover:text-white transition-all">Diff</span>
			</router-link>

			<div class="inline-flex mr-20">
				<input class="px-4 py-2 rounded-l-xl text-gray-700" v-model="searchPlayerMessage" type="search"
					placeholder="search for a player" v-on:keydown.enter="searchPlayer" />
				<div>
					<select class="px-2 py-2 rounded-r-xl bg-slate-200 text-slate-700">
						<!-- <option value="">EUNE</option>
						<option value="">EUW</option>
						<option value="">NA</option>
						<option value="">BR</option>
						<option value="">LAN</option>
						<option value="">LAS</option>
						<option value="">OCE</option>
						<option value="">KR</option>
						<option value="">TR</option>
						<option value="">JP</option> -->
						<option value="">RU</option>
					</select>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
// import { searchPlayers, searchMatches } from '../js/PlayerAndMatches'

export default {
	data() {
		return {
			massage: null,
			searchPlayerMessage: ''
		}
	},
	methods: {
		searchPlayer() {
			this.$router.push('/player/' + this.searchPlayerMessage)
			// searchPlayers(this.searchPlayerMessage).then(data => { console.log(data) });
		}
		// searchMatch() {
		//     searchMatches().then(data => { console.log("fsdfsdf", data) });
		// }
	}
}
</script>

<style src="../style/AppHeader.css"></style>
