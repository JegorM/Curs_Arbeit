<template>
    <template v-if="arts !== null">
        <div class="containerSlaider">
            <div>
                <img :src='`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.championID}_0.jpg`'
                    class="champImg" />
            </div>

        </div>
    </template>
</template>

<script>

import { getChampionsArt } from '../js/championsArt.js'

export default {
    data() {
        return {
            arts: null
        }
    },

    mounted() {
        this.championID = this.$route.params.id

        getChampionsArt(this.championID).then(data => {
            this.arts = data
            console.log(data)
        })
    }
}

</script>

<style >

</style>