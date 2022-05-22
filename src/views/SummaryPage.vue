<template>
    <FocusPanel>
        <h1>Summary</h1>
        <p>Name: {{personalInfo.name}}</p>
        <p>Age: {{personalInfo.age}}</p>
        <p>Where do you live: {{personalInfo.live?.country}}</p>
        <p>Package: {{personalInfo.packageData?.label}}</p>
        <p>Premium: {{premium}}</p>
        <ExtraButton @click="onBack">Back</ExtraButton>
        <MainButton @click="onBuy">Buy</MainButton>
    </FocusPanel>
</template>

<script>
import { useStore } from "vuex"
import FocusPanel from "../components/FocusPanel.vue"
import MainButton from "../components/MainButton.vue"
import ExtraButton from "../components/ExtraButton.vue"
import YourselfPage from "./YourselfPage.vue"
import HelloPage from "./HelloPage.vue"
import { computed } from "@vue/runtime-core"
import CalculatePremium from "../composables/calculate-premium"

export default {
  name: "SummaryPage",
  components: {
    FocusPanel, MainButton, ExtraButton
  },
  setup() {
    const store = useStore();

    const { premium } = CalculatePremium();

    const onBack = () => {
      store.commit("changePage", YourselfPage);
    };

    const onBuy = () => {
      alert("Congratulation !!!")
      store.commit("resetPeronalInfo");
      store.commit("changePage", HelloPage);
    };
    
    return {
      premium,
      personalInfo: computed (() => store.state.personalInfo),
      onBack, onBuy
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
