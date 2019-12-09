<template>
  <div class="outer text-center">
    <div class="container">
      <table class="notice mt-4 table py-3 table-borderless">
        <div class="justify-content-end">
          <div class="badge text-left">{{notice.studyType}}</div>
        </div>

        <div class="h2 text-custom1">{{notice.title}}</div>

        <hr />
        <div class="h4 text-custom2">{{notice.studyName}}</div>
        <hr />
        <div class="text-secondary mx-4 small pre-wrap">
          {{notice.content}}
        </div>
        <div class="row m-0 p-3 justify-content-end">
          <strong class="text-custom1">by {{notice.writer.name}}</strong>
        </div>
      </table>
      <p>
        <button @click="regist" v-if="$route.params.id" class="btn bg-custom1 text-white">가입신청</button>
      </p>

      <div class="row justify-content-end">
        <button v-if="chkwriter" @click="editNotice" class="border py-1 btn">수정</button>
        <button v-if="chkwriter" @click="deleteNotice" class="border py-1 mx-3 btn">삭제</button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data: function() {
    return {
      notice: { writer: '' , name:'',studyType:'' },
      chkwriter: false
    };
  },
  methods: {
    editNotice() {
      var id = this.$route.params.id;
      this.$router.push({
        params: {
          id: id
        }
      });
    },
    async regist() {
      await this.$http
        .put(
          "http://localhost:3000/study/" +
            this.$route.params.id +
            "/member/" +
            this.$store.getters.idx,
          {}
        )
        .then(res => {
          console.log(res.data);
          if (res.data.success == true) alert("신청완료");
          else {
            console.log(res.data);
            alert("신청실패:");
          }
          this.$router.push("/notice");
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

      this.notice = res.data;
      if (this.notice.writer.id == this.$store.getters.id)
        this.chkwriter = true;
    }
  }
};
</script>
<style scoped>
.mybtn {
  border: 2px solid #e5ccc8;
  border-radius: 10px;
  background-color: #ecd7d2 !important;
}
.table {
  box-shadow: 0 17px 30px 0 rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}
.maintitle {
  color: #455dff;
  font-weight: 500;
  padding-bottom: 15px;
}
.pre-wrap{
  white-space: pre-wrap;
}
</style>
