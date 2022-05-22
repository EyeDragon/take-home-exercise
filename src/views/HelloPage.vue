<template>
    <FocusPanel>
        <h1>Hello there</h1>
        <p>Let's buy some insurance. It is going to take only a few steps</p>
        <MainButton @click="onStart">Start</MainButton>
    </FocusPanel>
</template>

<script>
import { useStore } from "vuex"
import FocusPanel from "../components/FocusPanel.vue"
import MainButton from "../components/MainButton.vue"
import YourselfPage from "./YourselfPage.vue"

export default {
  name: "HelloPage",
  components: {
    FocusPanel, MainButton
  },
  setup() {
    const store = useStore();

    const onStart = () => {
      store.commit("changePage", YourselfPage);
    }
    return {
      onStart
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
