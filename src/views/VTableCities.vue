<template>
	<div class="popular-cities">
		<header class="popular-cities__header">
			<h5 class="popular-cities__title">
				Most popular cities
			</h5>
		</header>
		<div class="popular-cities__wrapper">
			<ul class="popular-cities__list" v-for="cities of popularCities" >
				<li class="popular-cities__item" v-for="{city} of cities">
					{{ city }}
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "VTableCities",
	computed: {
	...mapGetters({
			popularCities: 'popularCities/getPopularCities'
		}),

	}
}
</script>
