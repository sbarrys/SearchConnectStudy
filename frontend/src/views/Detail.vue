<template>
  <div class="outer text-center">
    <h2 class="bg-custom6 my-3 py-3">{{notice.title}}</h2>
    <div class="container">
      <table class="notice table table-borderless">
        <tr>
          <td style="width:15%">이름</td>
          <td>{{notice.studyName}}</td>
        </tr>
        <tr>
          <td>타입</td>

          <td>{{notice.studyType}}</td>
        </tr>
        <tr>
          <td>작성자</td>
          <td>{{notice.writer.name}}</td>
        </tr>
        <tr>
          <td>내용</td>
          <td>{{notice.content}}</td>
        </tr>
      </table>
      <button @click="regist" class="mybtn btn">가입신청</button>

      <button v-if="chkwriter" @click="editNotice" class="mybtn btn">수정</button>
      <button v-if="chkwriter" @click="deleteNotice" class="mybtn btn">삭제</button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data: function() {
    return {
      notice: {},
      chkwriter: false
    };
  },
  //   created() {
  //     if (this.notice.writer == this.$store.getters.id) this.chkwriter = true;
  //     console.log(this.notice.writer + "???" + this.$store.getters.id);
  //   },
  methods: {
    editNotice() {
      var id = this.$route.params.id;
      this.$router.push({
        name: "Edit",
        params: {
          id: id
        }
      });
    },
    async regist() {
      await this.$http
        .put(
          "http://localhost:3000/notices/" +
            this.$route.params.id +
            "/member/" +
            this.$store.getters.idx,
          {}
        )
        .then(res => {
          if (res.data.success == true) alert("신청완료");
        });
    },
    async deleteNotice() {
      const res = await this.$store.dispatch("deleteNotice", {
        id: this.$route.params.id
      });
      if (res.success === false) alert(res.message);
      else this.$router.push("/notice");
    }
  },
  async beforeCreate() {
    const res = await this.$store.dispatch("fetchNotice", {
      id: this.$route.params.id
    });
    if (res.success === false) alert(res.message);
    else {
      this.notice = res.result;
      if (this.notice.writer.id == this.$store.getters.id)
        this.chkwriter = true;
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