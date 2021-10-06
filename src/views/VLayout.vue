<template>
	<div class="main">
		<div class="main__left">
			<div class="container">
				<div class="main__left-wrapper">
					<slot name="left"></slot>
				</div>
			</div>
		</div>
		<div class="main__right" :class="{'main__right--banner-hidden': getShowedDelivery}">
			<div v-if="getShowedDelivery" class="main__right-wrapper banner">
				<div class="container">
					<slot name="right"></slot>
				</div>
			</div>
			<div v-if="!getShowedDelivery" class="banner banner--hidden" >
				<img class="banner__img" src="@/assets/images/free-shipping.svg" alt="">
			</div>
			<div class="container main__right-footer">
				<slot name="media-footer">
				</slot>
			</div>
		</div>
		<div v-if="showedLoading" class="main__loading">
			<v-loading/>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import VLoading from "@/components/VLoading";

export default {
  name: "VLayout",
	components: {
    VLoading
	},
	computed: {
    ...mapGetters({
      getShowedDelivery: 'search/getShowedDelivery',
      showedLoading: 'search/getShowedLoading',
  	})
	}
}
</script>
