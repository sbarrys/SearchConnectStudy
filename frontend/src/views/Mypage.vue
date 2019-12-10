!<template>
  <div class="row justify-content-center">
    <div class="col-6 mt-3">
      <div>id: {{$store.getters.id}}</div>
      <div>현재 로그인 토큰: {{$store.getters.idx}}</div>
      <div>가입한스터디</div>
      <div v-for=" st in $store.state.study" :key="st._id">
        <div> {{st.title}}</div>
      </div>
      <img class="img-fluid" :src="imgsrc" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgsrc: ""
    };
  },
  async beforeCreate() {
    var id = this.$store.getters.idx;
    const res = await this.$http.get(
      `http://localhost:3000/api/users/${id}/scheduleImg`
    );
    this.imgsrc = Buffer.from(res.data.scheduleImg, "binary").toString(
      "base64"
    );
    this.imgsrc = "data:image/jpg;base64," + this.imgsrc;
  }
};
</script>

<style scoped>

</style>