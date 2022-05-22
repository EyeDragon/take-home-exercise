<template>
    <FocusPanel>
        <h1>Tell us about yourself</h1>

        <div class="main-content">
          <div class="input-form">
            <label for="name">Name</label>
            <input id="name" type="text" v-model="personalInfo.name" />
            
            <label for="age">Age</label>
            <input id="age" type="number" v-model="personalInfo.age" />
            
            <label for="live">Where do you live</label>
            <select id="live" v-model="liveSelectedId">
              <option v-for="(item, index) in CountryCurrency" :key="index" :value="item.id">
                {{item.country}}
              </option>
            </select>

            <div class="group-radio">
              <div class="radio-form" v-for="(item, index) in Packages" :key="index">
                <input :id="item.label" type="radio" name="packageData" :value="item.id" v-model="packageSelectedId" />
                <label :for="item.label">{{labelPackage(item)}}</label>
              </div>
            </div>
          </div>
        </div>
        
        <h2>Your premium is: {{premium}}</h2>

        <ExtraButton @click="onBack">Back</ExtraButton>
        <MainButton @click="onNext">Next</MainButton>
    </FocusPanel>

</template>

<script>
import { useStore } from "vuex"
import FocusPanel from "../components/FocusPanel.vue"
import MainButton from "../components/MainButton.vue"
import ExtraButton from "../components/ExtraButton.vue"
import HelloPage from "./HelloPage.vue"
import ErrorPage from "./ErrorPage.vue"
import SummaryPage from "./SummaryPage.vue"
import { computed, onMounted, ref, watch } from "@vue/runtime-core"
import { CountryCurrency, Packages } from "../shared/data-const"
import CalculatePremium from "../composables/calculate-premium"
import ValidateInfo from "../composables/validate-info"

export default {
  name: "YourselfPage",
  components: {
    FocusPanel, MainButton, ExtraButton
  },
  setup() {
    const store = useStore();

    const liveSelectedId = ref(0);
    const packageSelectedId = ref(0);

    const personalInfo = computed(() => store.state.personalInfo);
    const { price, premium } = CalculatePremium();
    const { invalid } = ValidateInfo();

    onMounted(() => {
      liveSelectedId.value = 1;
      packageSelectedId.value = 1;
    });

    watch(()=> liveSelectedId.value, ()=> {
      personalInfo.value.live = CountryCurrency.find(x => x.id === liveSelectedId.value);
    })

    watch(()=> packageSelectedId.value, ()=> {
      personalInfo.value.packageData = Packages.find(x => x.id === packageSelectedId.value);
    })

    const labelPackage = (item) => {
      let description =  "";

      if(item.id !== 1) {
        const sale = price.value * item.sale;
        const prefix = sale < 0 ? "" : `+${sale}${personalInfo.value.live?.currency ?? ""}, `; 
        description = `(${prefix}${item.sale * 100}%)`;
      }

      return `${item.label} ${description}`;
    };

    const onBack = () => {
      store.commit("changePage", HelloPage);
    };

    const onNext = () => {
      if(store.state.personalInfo.age > 100) {
        store.commit("resetPeronalInfo");
        store.commit("changePage", ErrorPage);
      } else {
        console.log(invalid.value)
        if(!invalid.value) {
          store.commit("changePage", SummaryPage);
        }
      }
    };

    return {
      liveSelectedId,
      packageSelectedId,
      personalInfo,
      price,
      premium,
      CountryCurrency,
      Packages,
      labelPackage,
      onBack, onNext
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-content, .group-radio {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .group-radio {
    margin: 5px 0;
  }

  .input-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  input[type="text"], input[type="number"], select {
    margin: 5px 0;  
    padding: 12px 20px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .radio-form {
    display: flex;
    align-items: flex-start;
    margin: 5px 0;  
    width: 100%;
  }

</style>
