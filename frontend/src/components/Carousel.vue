<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide class="img-fluid" caption="First slide" :img-src="imgsrc"></b-carousel-slide>
      <b-carousel-slide class="img-fluid" caption="Second Slide" :img-src="imgsrc"></b-carousel-slide>
      <b-carousel-slide class="img-fluid" caption="Third Slide" :img-src="imgsrc"></b-carousel-slide>
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