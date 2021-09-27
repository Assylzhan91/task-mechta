<template>
  <form
		class="form"
		@submit.prevent = "onSubmit"
		@keypress.enter = "onSubmit"
	>

		<div
			class="form__group"
			:class="setClassShow"
		>
			<v-input
				:value="searchVal"
				@handler="searchSetVal"
			/>
			<v-btn
				:colorType="btnTypeColor "
				class="form__btn"
				@handler="btnClicks"
			>{{ textBtn }}</v-btn>
			<template v-if="isOpen">
				<ul class="form__list" v-if="showError">
					<template v-for="city of searchingCityVal">
						<li class="form__item">
							{{ city.label }}
						</li>
					</template>
				</ul>
			</template>
			<strong
				v-if="showError || searchVal.length && showErrorSearchVal"
				class="form__error"
			>
				We didn’t found such city. Please check spelling
			</strong>
		</div>

  </form>
</template>

<script>
import VBtn from "@/components/VBtn";
import VInput from "@/components/VInput";
import {mapGetters, mapActions, mapState} from "vuex";


export default {
	data: ()=>({
    showError: false,
	}),
  components: {
    VInput,
    VBtn,
	},
  name: 'VSearch',
  methods: {
    ...mapActions({
      searchSetValAction: 'search/searchSetValAction',
      clearValCityAction: 'search/clearValCityAction',
      onSubmit: 'search/onSubmitAction',
		}),
    searchSetVal(value) {
      this.searchSetValAction(value)
    },
	},
	mounted() {

  },
  computed: {
    ...mapState({
			isOpen: state => state.search['isOpen']
    }),
    ...mapGetters({
			getOptions: 'search/getOptionSort',
      searchVal: 'search/getSearchVal',
      searchingCityVal: 'search/searchingCityVal',
      setClassShow: 'search/getSetClassShow',
    }),

		btnClicks() {
      return (!this.searchingCityVal.length && this.searchVal.length)
				? this.clearValCityAction
				: this.onSubmit
		},
    showErrorSearchVal() {
      return this.searchVal.length && !this.searchingCityVal.length
		},
		btnTypeColor (){
      return  this.showErrorSearchVal ? 'scarlet' : 'sky-blue'
		},
		textBtn() {
      return  this.showErrorSearchVal ? 'X' : 'Enter'
		}
	},
	watch: {
    searchVal(val) {
     if(val.length && this.searchingCityVal.length) {
       if(this.isOpen){
         this.showError = true
       }else {
         this.showError = false
			 }
     }else {
       this.showError = false
		 }
		}
	}
}
</script>
