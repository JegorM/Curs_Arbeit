<template>
	<div class="w-full min-[1440px]:px-0 px-2 max-w-[1440px] mt-10">
		<template v-if="champions !== null">
			<div class="pt-4 px-2 flex flex-wrap justify-between bg-white shadow-[0px_0px_15px] shadow-slate-200 rounded-lg">
				<router-link v-for="champion in champions" :key="champion.key" :to="'/champion/' + champion.id" class="ikonChamp">
					<div
						class="py-4 px-2 rounded w-[170px] flex flex-col items-center text-center gap-y-1 md:gap-y-2 hover:bg-sky-200">
						<img class="w-24"
							:src="`http://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`"
							:alt="champion.name" />
						<div class="">
							<div class="text-md text-slate-900">{{ champion.name }}</div>
							<div class="text-base text-slate-700">{{ champion.tags.join(', ') }}</div>
						</div>
					</div>
				</router-link>
			</div>
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

