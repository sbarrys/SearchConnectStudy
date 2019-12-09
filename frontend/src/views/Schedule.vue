<template>
  <div>
    <input type="image" src alt />
    <div class="col-6 mx-auto">
      <b-form-group label="스케줄 올리기">
        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          id="imgfile"
        ></b-form-file>
      </b-form-group>
      <button class="btn btn-primary" @click="sendfile">제출</button>
      <!-- <img :src="sr" class=""/> -->
    </div>
    <!-- carousel -->
   <div class="container">
     <Carousel></Carousel>
   </div>
    <!-- carousel end -->
  </div>
</template>

<script>
import moment from "moment";
import Carousel from "@/components/Carousel.vue";
export default {
  components: {
    Carousel
  },
  data() {
    return {
      img: "",
      file: [],
      imgsrc: ""
    };
  },
  methods: {
    async sendfile() {
      var id = this.$store.getters.idx;
      const formData = new FormData();
      formData.append("scheduleImg", this.file);
      const res2 = await this.$http.put(
        `http://localhost:3000/api/users/${id}/scheduleImg`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
    }
  }
 
};
</script>
<style>
.mybtn {
  border: 2px solid #e5ccc8;
  border-radius: 10px;
  background-color: #ecd7d2 !important;
}


</style>
