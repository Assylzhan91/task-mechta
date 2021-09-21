<template>
	<div class="container">
		<div class="content">
			<section class="content__left">
				<img src="@/assets/images/icons/fs-icon.svg" alt="">
				<VSearch></VSearch>
				<h1>Left</h1>
			</section>
			<section class="content__right">
				<h1>Right</h1>
			</section>
		</div>
	</div>

</template>
<script>

import VSearch from "./views/VSearch";

export default {
  data: ()=>({

	}),
	components: {
    VSearch
	},

}
</script>
