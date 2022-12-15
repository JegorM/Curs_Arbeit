<template>


    <!-- {{ JSON.stringify(this.playerInfo) }}
    {{ JSON.stringify(this.playerMathesId) }} -->
    <div class="containerArt">
        <div class="LvlIkonName" v-if="playerInfo !== null">
            <img class="IconPlayer"
                :src="`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${playerInfo.profileIconId}.png`"
                alt="">
            <div class="NameAndLvl">
                {{ $route.params.playerName }}
                <p>level: {{ playerInfo.summonerLevel }}</p>
            </div>
        </div>



        <div class="MatchsStats" v-for="matchesInfo in matchesInfos" :key="matchesInfo.metadata.matchId">
            <div class="nameStats">
                <div class="team">Team:1</div>
                <div class="items stat">Items</div>
                <div class="kda stat">KDA</div>
                <div class="minions stat">Minions</div>
                <div class="totDamage stat">Total Damage</div>
                <div class="visions stat">Vision</div>
                <div class="totGold stat">Total gold</div>
            </div>
            <div v-for="participant in matchesInfo.info.participants" :key="participant.puuid">
                <div class="test" v-if="participant.teamId == 100">
                    <div class="namePlayers">
                        <div class="winTeam" v-if="participant.win === true && participant.teamId == 100">Win</div>

                        <img class="champIkonGame"
                            :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${participant.championName}.png`"
                            alt="">

                        <p class="name">{{ participant.summonerName }}</p>

                    </div>
                    <div v-if="item !== null">
                        <div class="containerItems">
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item0 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item0}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item1 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item1}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item2 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item2}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item3 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item3}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item4 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item4}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item5 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item5}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item6 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item6}.png`"
                                    alt="">
                            </div>

                        </div>
                    </div>
                    <div class="killSuportDie">
                        <p> {{ participant.kills }} /</p>
                        <p>{{ participant.deaths }} /</p>
                        <p>{{ participant.assists }} </p>
                    </div>
                    <div class="minionsKill">
                        <div class="minion">{{ participant.totalMinionsKilled + participant.neutralMinionsKilled }}
                        </div>

                    </div>
                    <div class="totalDamage">
                        <div>{{ participant.totalDamageDealtToChampions }}</div>
                    </div>
                    <div class="vision">
                        <div>{{ participant.visionScore }}</div>
                    </div>
                    <div class="gold">
                        <div>{{ participant.goldEarned }}</div>
                    </div>
                </div>
            </div>
            <div>
                <p class="team">Team:2</p>
            </div>
            <div v-for="participant in matchesInfo.info.participants" :key="participant.puuid">

                <div class="test" v-if="participant.teamId == 200">
                    <div class="namePlayers">
                        <div class="winTeam" v-if="participant.win === true && participant.teamId == 200">Win</div>
                        <img class="champIkonGame"
                            :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${participant.championName}.png`"
                            alt="">
                        <p class="name">{{ participant.summonerName }}</p>
                    </div>
                    <div v-if="item !== null">
                        <div class="containerItems">
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item0 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item0}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item1 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item1}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item2 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item2}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item3 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item3}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item4 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item4}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item5 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item5}.png`"
                                    alt="">
                            </div>
                            <div class="iconLongAndHeigth">
                                <img class="imgIcon" v-if="participant.item6 != 0"
                                    :src="`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${participant.item6}.png`"
                                    alt="">
                            </div>
                        </div>
                    </div>
                    <div class="killSuportDie">
                        <p> {{ participant.kills }} /</p>
                        <p>{{ participant.deaths }} /</p>
                        <p>{{ participant.assists }} </p>
                    </div>
                    <div class="minionsKill">
                        <div class="minion">{{ participant.totalMinionsKilled + participant.neutralMinionsKilled }}
                        </div>

                    </div>
                    <div class="totalDamage">
                        <div>{{ participant.totalDamageDealtToChampions }}</div>
                    </div>
                    <div class="vision">
                        <div>{{ participant.visionScore }}</div>
                    </div>
                    <div class="gold">
                        <div>{{ participant.goldEarned }}</div>
                    </div>
                </div>


            </div>

        </div>

    </div>
</template>

<script>
import { searchPlayers, searchMatches, infoAbuttMatch } from '../js/PlayerAndMatches'
import { getItems } from '../js/items.js'
export default {
    data() {
        return {
            playerInfo: null,
            playerMathesId: null,
            matchesInfos: [],
            item: null,
        }
    },
     beforeRouteUpdate(to) {
        searchPlayers(to.params.playerName).then(data => {
            this.playerInfo = data
            return data
        })
            .then(data => { return searchMatches(data.puuid) })
            .then(data => { this.playerMathesId = data; return data; })
            .then(data => {
                // this.infoAbuttMatch = data;

                data.forEach(element => {
                    infoAbuttMatch(element).then(data => { this.matchesInfos.push(data) })


                });




            })
    },
    mounted() {
        searchPlayers(this.$route.params.playerName).then(data => {
            this.playerInfo = data
            return data
        })
            .then(data => { return searchMatches(data.puuid) })
            .then(data => { this.playerMathesId = data; return data; })
            .then(data => {
                // this.infoAbuttMatch = data;

                data.forEach(element => {
                    infoAbuttMatch(element).then(data => { this.matchesInfos.push(data) })


                });




            })
        getItems().then(data => {
            this.item = data

        })

    }

}


</script>

<style src="../style/views/playerView.css">

</style>