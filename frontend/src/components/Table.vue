<template>
  <div class="container-fluid text-center">
    <table hover class="table small table-hover w-100" style="table-layout: fixed">
      <thead>
        <tr>
          <th style="width:20%">{{item_field[0]}}</th>
          <th style="width:60%">{{item_field[1]}}</th>
          <th style="width:20%">{{item_field[2]}}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(value,index) in items" :key="value.id" @click="detail(value,index)">
          <td>{{value[item_field[0]]}}</td>
          <td>{{value[item_field[1]]}}</td>
          <td>{{value[item_field[2]]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["item_field", "items", "val"],
  methods: {
    detail(value,index) {
      this.$router.push({
        name: this.val + "Detail",

        params: {
          id: this.$route.params.id,
          idx: value._id,
          nowIndex: index
        }
      });
    }
  }
};
</script>
<style scoped>

</style>