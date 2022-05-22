<template>
    <button class="main-button" type="button"><slot></slot></button>
</template>

<script>
export default {
  name: "MainButton"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-button {
        background-color: rgb(26 26 26);
        padding: 5px;
        border-radius: 3px;
        color: white;
        padding: 10px 40px;
        cursor: pointer;
    }
</style>
