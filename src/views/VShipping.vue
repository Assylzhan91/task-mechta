<template>
	<div class="shipping shipping__wrapper">
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
