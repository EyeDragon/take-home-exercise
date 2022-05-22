<template>
    <button class="extra-button" type="button"><slot></slot></button>
</template>

<script>
export default {
  name: "ExtraButton"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .extra-button {
        background-color: white;
        padding: 5px;
        border: 1px solid;
        border-radius: 3px;
        color: rgb(26 26 26);
        padding: 10px 40px;
        cursor: pointer;
    }
</style>
