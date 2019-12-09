<template>
  <div>
    <b-table class="small" striped hover :items="items" :fields="item_field" @row-clicked="detail"></b-table>
  </div>
</template>

<script>
export default {
  props: ["item_field", "items", 'val'],
  methods:{
     detail(record,index) {
       console.log(record)
      this.$router.push({
        name: this.val+'Detail',
        params: {
          id: this.record.id,
          temp: re._id,
        }
      });
    },
  }
};
</script>
<style scoped>
</style>