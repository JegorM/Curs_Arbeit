<template>
	<main class="bg-gray-50 pb-10 flex flex-col min-h-screen h-full items-center">
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
