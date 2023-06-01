<template>
	<div class="text-green-600" v-if="win">Victory</div>
	<div class="text-red-600" v-else>Defeat</div>
</template>

<script>
export default {
	props: ['win']
}
</script>

