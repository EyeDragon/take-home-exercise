<template>
    <div id="focus-panel">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "FocusPanel"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #focus-panel {
        background-color: rgb(250 250 250);
        padding: 20px 30px;
    }
</style>
