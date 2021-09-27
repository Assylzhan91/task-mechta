<template>
	<div class="container">
		<v-layout class="content">
			<template #left>
				<v-header class="mb-80"/>
				<v-search/>
			</template>
<!--			<template #right>
				asdasd
			</template>-->
		</v-layout>
	</div>

</template>
<script>

import VSearch from "./views/VSearch";
import VHeader from "./views/VHeader";
import VLayout from "./views/VLayout";

export default {
  data: ()=>({

	}),
	components: {
    VSearch,
		VHeader,
    VLayout
	},

}
</script>
