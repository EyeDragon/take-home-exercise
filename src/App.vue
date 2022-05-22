<template>
  <div class="app">
    <component :is="currentPage"></component>
    <HelloPage />
  </div>
</template>

<script>
import { useStore } from "vuex"
import { computed } from "@vue/runtime-core"
import HelloPage from "./views/HelloPage.vue"

export default {
  name: "App",
  setup() {
    const store = useStore();
    store.commit("changePage", HelloPage);

    return {
      currentPage: computed(() => store.state.currentPage)
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 20% 0 20%;
}
</style>
