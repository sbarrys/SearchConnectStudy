<template>
  <div>
    <b-table class="small" striped hover :items="items" :fields="item_field"></b-table>
  </div>
</template>

<script>
export default {
  props: ["item_field", "items"]
};
</script>
<style scoped>
</style>