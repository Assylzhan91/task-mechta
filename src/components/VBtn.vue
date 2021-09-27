<template>
	<button
		class="v-btn"
		:class="setColorType"
		:type="typeBtn"
		@click="$emit('handler')"
	>
		<slot>Button</slot>
	</button>
</template>

<script>
export default {
  name: "VBtn",
	props: {
    colorType: {
      type: String
		},
    typeBtn: {
      type: String,
			default: 'button'
		}
	},
	computed: {
    setColorType (){
      return `${this.colorType ? `v-btn__${this.colorType}` : '' }`
		}
	}
}
</script>
