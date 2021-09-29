<template>
	<div class="shipping shipping__wrapper">
		<!--		<h1 class="shipping__title">Shipping</h1>-->
	<v-delivery></v-delivery>
	</div>
</template>

<script>
import VDelivery from '@/components/VDelivery'
import VFooter from '@/views/VFooter'
export default {
  components: {
    VDelivery,
    VFooter
	},
  name: "VShipping"
}
</script>
