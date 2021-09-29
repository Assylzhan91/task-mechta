<template>
	<div class="main">
		<div class="main__left">
			<div class="container">
				<div class="main__left-wrapper">
					<slot name="left"></slot>
				</div>
			</div>
		</div>
		<div class="main__right">
			<div class="main__right-wrapper banner">
				<div class="container">
					<slot name="right"></slot>
				</div>
			</div>
			<div class="banner">
				<img class="banner__img" src="@/assets/images/free-shipping.svg" alt="">
			</div>
			<div class="container">
				<slot name="media-footer">
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "VLayout",
	mounted() {

  }
}
</script>
