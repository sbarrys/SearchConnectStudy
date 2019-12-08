<template>
  <form method="post" @submit.stop.prevent="postNotice">
    <h2 class="text-center mt-3">과제 생성</h2>
    <div class="container">
      <table class="table mt-3 table-striped">
        <tr>
          <th>Title :</th>
          <td>
            <input
              class="form-control"
              type="text"
              name="title"
              required
              v-model="assignment.title"
              placeholder="제목"
            />
          </td>
        </tr>
        <tr>
          <th>Content</th>
          <td>
            <textarea
              class="form-control"
              name="content"
              required
              v-model="assignment.content"
              placeholder="내용"
            ></textarea>
          </td>
        </tr>
        <tr>
          <th>Deadline</th>
          <td>
            <input
              class="form-control"
              type="date"
              name="deadline"
              required
              v-model="assignment.deadline"
              placeholder="기한"
            />
          </td>
        </tr>
      </table>
      <button type="submit" class="mybtn btn bg-custom4">작성</button>
    </div>
  </form>
</template>
<script>
// import temp from '../../../backend/data/notice'
export default {
  data() {
    return {
      assignment: {
        writer: "",
        title: "",
        content: "",
        deadline: ""
      }
    };
  },
  methods: {
    async postNotice() {
      const res = await this.$store.dispatch("appendAssignment", {
        id: this.$route.params.id,
        data: this.assignment
      });
      if (res.success === false) alert(res.message);
      else this.$router.push(`/study/${this.$route.params.id}/assignment`);
    }
  },
  created() {
    this.assignment.writer = this.$store.getters.idx;
  }
};
</script>
<style scoped>
.outer {
  display: table;
  width: 100%;
  height: 100%;
}
.inner {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.notice {
  width: 60%;
  /* height: 100px; */
  margin: auto;
  text-align: center;
}
</style>
