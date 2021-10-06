<template>
	<div class="delivery shipping__delivery">
		<ul class="delivery__list">
			<li
				v-for="(method, idx) of deliveryMethod"
				class="delivery__wrapper"
				:class="{
          'delivery__wrapper--picked':method.picked,
         	'delivery__wrapper--not-available':!method.available
        }"
				@click="method.available && pickUpMethod(idx)"
				:key="method.type"
			>
				<div class="delivery__item">
					<h4 class="delivery__title">{{ method.title }}</h4>
					<h4 v-if="!method.available" class="delivery__text-disable">Not availible in that city</h4>
					<div class="delivery__img">
						<img :src="method.img" alt="">
					</div>
					<strong class="delivery__price">{{ method.price }}$</strong>
				</div>
				<div class="delivery__picked" v-if="method.picked">
					<span class="delivery__marked"> &#10003;</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "VDelivery",
	created() {
    this.methodDelivery()
  },
  computed: {
    ...mapGetters({
      deliveryMethod: 'delivery/getDeliveryMethod'
		}),
  },
	methods: {
    ...mapActions({
			'methodDelivery': 'delivery/getCityAction',
			'pickUpMethod': 'delivery/pickUpMethodAction',
		})
	}
}
</script>
