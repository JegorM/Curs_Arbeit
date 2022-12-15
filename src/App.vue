<template>
  <AppHeader />
  <AppSlider />
  <router-view></router-view>


</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppSlider from "./components/AppSlider.vue";


export default {
  name: 'App',
  components: {
    AppHeader,
    AppSlider
  }
};
</script>

























<style src="./style/App.css" />
