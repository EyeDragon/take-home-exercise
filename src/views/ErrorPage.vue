<template>
    <FocusPanel>
        <h1>Ooops</h1>
        <p>Your age is over our accepted limit.</p>
        <p>We are sorry but we cannot insure you now</p>
        <MainButton @click="onOK">Ok :(</MainButton>
    </FocusPanel>
</template>

<script>
import { useStore } from "vuex"
import FocusPanel from "../components/FocusPanel.vue"
import MainButton from "../components/MainButton.vue"
import HelloPage from "./HelloPage.vue"

export default {
  name: "ErrorPage",
  components: {
    FocusPanel, MainButton
  },
  setup() {
    const store = useStore();

    const onOK = () => {
      store.commit("changePage", HelloPage);
    }
    return {
      onOK
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
