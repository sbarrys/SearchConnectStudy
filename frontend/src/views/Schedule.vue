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
      <button class="btn btn-primary" @click="submittt">제출</button>
    </div>
    <img :src="srcc" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newImage: {
        writer: "",
        path: ""
      },
      img: "",
      file: [],
      srcc: "",
      sr:
        "file:///D:/web_sisul/projec_v1/wepproject/backend/routes/uploads/2019-12-08T12-17-52.319Z233DB44C555C85C629.jpg"
    };
  },
  computed: {
    image() {
      return this.$store.state.studySchedules;
    }
  },
  methods: {
    async submittt() {
      var id = this.$store.getters.idx;

      console.log(this.file);
      console.log(document.getElementById("imgfile"));
      const formData = new FormData();
      formData.append("scheduleImg", this.file);
      //   formData.append(name, this.file, this.file.name);
      //   alert('?')
      const res2 = await this.$http.put(
        `http://localhost:3000/api/users/${id}/scheduleImg`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
    }
  },
  async beforeCreate() {
    var id = this.$store.getters.idx;
    const res = await this.$http.get(
      `http://localhost:3000/api/users/${id}/scheduleImg`
    );
    console.log(res);
    this.srcc = res.data.data.scheduleImg;
    this.srcc;
  }
};
</script>
<style>
.mybtn {
  border: 2px solid #e5ccc8;
  border-radius: 10px;
  background-color: #ecd7d2 !important;
}
.schedule {
}
</style>