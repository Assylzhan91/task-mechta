<template>
		<v-layout>
			<template #left>
				<v-header class="mb-80 main__left-header"/>
				<v-search class="mb-40"/>
				<v-table-cities class="mb-100"/>
				<v-footer class="main__footer"/>
			</template>
			<template #right>
				<v-shipping/>
			</template>
			<template #media-footer>
				<v-footer/>
			</template>

		</v-layout>
</template>
<script>

import VSearch from "./views/VSearch"
import VHeader from "./views/VHeader"
import VLayout from "./views/VLayout"
import VTableCities from "./views/VTableCities"
import VFooter from "./views/VFooter"
import VShipping from "./views/VShipping"
import {mapActions} from "vuex";

export default {
	components: {
    VSearch,
		VHeader,
    VLayout,
    VTableCities,
    VFooter,
    VShipping
	},
	methods: {
    ...mapActions({
			'getAllCities': 'search/getAllCitiesAction'
		})
	},
	mounted() {
		this.getAllCities()
  }
}
</script>
