<template>
		<v-layout>
			<template #left>
				<v-header class="mb-80"/>
				<v-search class="mb-40"/>
				<v-table-cities class="mb-100" />
				<v-footer class="main__footer" />
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

export default {
  data: ()=>({

	}),
	components: {
    VSearch,
		VHeader,
    VLayout,
    VTableCities,
    VFooter,
    VShipping
	},

}
</script>
