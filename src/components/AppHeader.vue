<template>
	<div class="container">
		<router-link
			class="logo"
			to="/"
		></router-link>
		<div class="playerSearch">
			<input
				v-model="searchPlayerMessage"
				type="search"
				class="search"
				placeholder="search for a player"
				v-on:keydown.enter="searchPlayer"
			/>
			<p>
				<select
					name=""
					id=""
					class="servLeag"
				>
					<!-- <option value="">EUNE</option>
                    <option value="">EUW</option>
                    <option value="">NA</option>
                    <option value="">BR</option>
                    <option value="">LAN</option>
                    <option value="">LAS</option>
                    <option value="">OCE</option>
                    <option value="">KR</option> -->
					<option value="">RU</option>
					<!-- <option value="">TR</option>
                    <option value="">JP</option> -->
				</select>
			</p>
		</div>
		<div class="dayNihtAndSearsch">
			<!-- <div>fsdfsf</div>
            <input type="search" class="search" placeholder="search for a hero"> -->
		</div>
	</div>
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
