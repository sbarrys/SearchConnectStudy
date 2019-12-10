<template>
  <div class="outer text-center">
    <div class="container shadow-lg rounded">
      <div class="notice my-4 py-3 table-borderless">
        <div class="justify-content-end">
          <div class="badge text-left">DeadLine: {{notice.deadline}}</div>
        </div>
        <div class="h2 text-custom1">{{notice.title}}</div>
        <hr />
        <div class="text-secondary mx-4 small pre-wrap">{{notice.content}}</div>
      </div>

      <div class="row justify-content-end">
        <!-- <button v-if="chkwriter" @click="editNotice" class="border py-1 btn">수정</button> -->
        <button v-if="chkwriter" @click="deleteNotice" class="border py-1 mx-3 btn">삭제</button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import moment from "moment";

export default {
  data: function() {
    return {
      notice: "",
      chkwriter: false
    };
  },
  methods: {
    // editNotice() {
    //   var id = this.$route.params.id;
    //   var idx = this.$route.params.idx;
    //   this.$router.push({
    //     name: "AssignmentEdit",
    //     params: {
    //       id: id,
    //       idx: idx
    //     }
    //   });
    // },
    async deleteNotice() {
      const res = await this.$store.dispatch("deleteAssignment", {
        id: this.$route.params.id,
        idx: this.$route.params.idx
      });
      if (res.success === false) alert(res.message);
      else this.$router.push(`study/${this.$route.params.id}`); //고쳐
    }
  },
  async beforeCreate() {
    const res = await this.$store.dispatch("fetchAssignment", {
      id: this.$route.params.id,
      idx: this.$route.params.idx
    });
    if (res.success === false) alert(res.message);
    else {
      console.log(this.$route.params);
      this.notice = res.result[this.$route.params.nowIndex];

      this.notice.deadline = moment(String(this.notice.deadline)).format(
        "YYYY-MM-DD"
      );

      //   this.notice = res.result;
      //   if (res.result.writer == this.$store.getters.idx)
      //     this.chkwriter = true;
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
