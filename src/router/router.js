import { createRouter, createWebHashHistory } from 'vue-router'

const HomeView = () =>
	import(/* webpackChunkName: "home-view" */ '../views/HomeView.vue')
const ChampionView = () =>
	import(/* webpackChunkName: "champion-view" */ '../views/ChampionView.vue')

const PlayerView = () =>
	import(
		/* webpackChunkName: "player-view" */ '../views/PlayerView/PlayerView.vue'
	)

const TopPlayersView = () =>
	import(
		/* webpackChunkName: "player-view" */ '../views/TopPlayersView/TopPlayersView.vue'
	)

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/champion/:id', component: ChampionView },
	{ path: '/player/:serverCode/:playerName', component: PlayerView },
	{ path: '/top-players', component: TopPlayersView }
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
