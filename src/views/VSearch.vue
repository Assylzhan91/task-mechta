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
				:class="!showError && btnTextError && btnTextClear ? 'form__input-error':''"
			/>
			<template>
				<v-btn
					v-if="!searchVal.length || !btnTextClear || showError"
					colorType="sky-blue"
					class="form__btn"
					:class="!btnTextClear ? 'form__btn-clear':''"
					@handler="btnTextClear ? onSubmit() : clearValCityAction()"
				>{{ btnTextClear ? 'Enter': 'X' }}</v-btn>
				<v-btn
					v-else-if="!showError && btnTextError && btnTextClear"
					colorType="scarlet"
					class="form__btn"
					@handler="clearValCityAction"
				>X</v-btn>
			</template>

			<template v-if="isOpen">
				<ul class="form__list" v-if="showError">
					<template v-for="city of searchingCityVal" >
						<li class="form__item" @click="selectedCity(city.id)" :key="city.id">
							{{ city.label }}
						</li>
					</template>
				</ul>
			</template>
			<strong
				v-if="showError || searchVal.length && btnTextClear"
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
import { mapGetters, mapActions, mapState } from "vuex";


export default {
	data: ()=>({
    showError: false,
    btnTextClear: true,
    btnTextError: false,
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
      selectedCity: 'search/selectedCityAction',
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
     /* return (!this.searchingCityVal.length && this.searchVal.length)
				? this.clearValCityAction
				: this.onSubmit*/
		},
    showErrorSearchVal() {
      // return this.searchVal.length && !this.searchingCityVal.length
		},
		btnTypeColor (){
      // return  this.showErrorSearchVal ? 'scarlet' : 'sky-blue'
		},
		textBtn() {
      // return  this.showErrorSearchVal ? 'X' : 'Enter'
		}
	},
	watch: {
    searchVal(val) {
      if(this.searchingCityVal.length && this.searchingCityVal[0].label === val) {
        this.showError = false
        this.btnTextClear = false
			}else {
        this.btnTextClear = true
        if(val.length && this.searchingCityVal.length) {
          this.showError = true
        }else {
          this.btnTextError = true
          // this.btnTextClear = false
					if(val.length) {
            this.btnTextError = true
					}else {
            this.btnTextError = false
					}
          this.showError = false
				}
			}
		}
	}
}
</script>
