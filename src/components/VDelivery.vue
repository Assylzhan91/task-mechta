<template>
	<div class="delivery shipping__delivery">
		<ul class="delivery__list">
			<li
				class="delivery__wrapper"
				:class="{'delivery__wrapper--picked':method.picked}"
				v-for="method of deliveryMethod"
			>
				<div class="delivery__item">
					<h4 class="delivery__title">{{ method.title }}</h4>
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
import {mapGetters} from "vuex";

export default {
  name: "VDelivery",
  computed: {
    ...mapGetters({
      deliveryMethod: 'delivery/getDeliveryMethod'
		})
  }
}
</script>
