<template>
	<div>
		<section v-if="this.$slots.left" class="content__left">
			<div class="content__wrapper">
				<slot name="left"></slot>
			</div>
		</section>
		<section v-if="this.$slots.right" class="content__right">
			<slot name="right"></slot>
		</section>
	</div>
</template>

<script>
export default {
  name: "VLayout",
	mounted() {

  }
}
</script>
