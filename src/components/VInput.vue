<template>
	<div class="v-input">
		<input
			type="text"
			class="v-input__elem"
			placeholder="Enter name of the city"
			:value="value"
			@input="$emit('handler', $event.target.value.trim())"
		>
	</div>
</template>

<script>
export default {
  name: "VInput",
	props: {
    value: String
	},
	computed: {
    hideShadow(){
      return this.value.length
				? 'v-input--hide-shadow'
				: ''
		}
	}
}
</script>
