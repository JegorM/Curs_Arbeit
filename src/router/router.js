import { createRouter, createWebHashHistory } from 'vue-router'

const HomeView = import(
	/* webpackChunkName: HomeView */ '../views/HomeView.vue'
)
const ChampionView = import(
	/* webpackChunkName: ChampionView */ '../views/ChampionView.vue'
)

const PlayerView = import(
	/* webpackChunkName: PlayerView */ '../views/PlayerView/PlayerView.vue'
)

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/champion/:id', component: ChampionView },
	{ path: '/player/:serverCode/:playerName', component: PlayerView }
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
