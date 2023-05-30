<template>
	<div
		class="pt-4 flex flex-wrap justify-between w-full max-w-[1440px] mx-auto px-3 mt-10 rounded-lg bg-white shadow-[0px_0px_15px] shadow-slate-200">
		<template v-if="champions !== null">
			<router-link v-for="champion in champions" :key="champion.key" :to="'/champion/' + champion.id" class="ikonChamp">
				<div class="py-4 px-2 rounded w-[170px] flex flex-col items-center text-center gap-y-2 hover:bg-sky-200">
					<img class="w-24"
						:src="`http://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`"
						:alt="champion.name" />
					<div class="">
						<div class="text-md text-slate-900">{{ champion.name }}</div>
						<div class="text-base text-slate-700">{{ champion.tags.join(', ') }}</div>
					</div>
				</div>
			</router-link>
		</template>
	</div>
</template>

<script>
import champions from '../data/champions.json'

export default {
	data() {
		return {
			champions: champions.data
		}
	}
}
</script>

