<template>
	<main class="bg-gray-50 pb-10">
		<AppHeader />
		<router-view></router-view>
	</main>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
	name: 'App',
	components: {
		AppHeader,
	}
}
</script>

<style src="./style/App.css" />
