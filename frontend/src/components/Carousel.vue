<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
      v-for="src in imgsrc"
      :key="src"
    >
      <b-carousel-slide class="img-fluid" caption="" :img-src="src"></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      imgsrc: ""
    };
  },
  async beforeCreate() {
    await this.$store.dispatch("fetchNotices");
    var id =this.$route.params.id
    const res = await this.$http.get(
      `http://localhost:3000/notices/${id}/membersScheduleImg`
    );
  console.log(res.data)
  for(var i in res.data.data){  this.imgsrc[i] = Buffer.from(res.data.data[i], "binary").toString(
      "base64"
    );
    this.imgsrc[i] = "data:image/jpg;base64," + this.imgsrc[i];}
  }
};
</script>
