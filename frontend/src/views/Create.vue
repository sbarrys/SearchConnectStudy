<template>

  <form method="post" @submit.stop.prevent="postNotice">
    <h2 class="text-center mt-3">스터디 생성</h2>
    <div class="container">
      <table class="table mt-3 table-striped">
        <tr>
          <th>Study Type:</th>
          <td>
            <select v-model="selected" class="form-control">
              <option disabled value>select one</option>
              <option>멘토 멘티</option>
              <option>자율 스터디</option>
            </select>
          </td>
        </tr>

        <tr>
          <th>Member:</th>
          <td>
            <input
              class="form-control"
              type="Number"
              name="studyMember"
              required
              v-model="notice.maxMember"
            />
          </td>
        </tr>
        <tr>
          <th>Study Name :</th>
          <td>
            <input
              class="form-control"
              type="text"
              name="studyName"
              required
              v-model="notice.studyName"
              placeholder="스터디 이름"
            />
          </td>
        </tr>
        <tr>
          <th>Title :</th>
          <td>
            <input
              class="form-control"
              type="text"
              name="title"
              required
              v-model="notice.title"
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
              v-model="notice.content"
              placeholder="내용"
            ></textarea>
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
      notice: {
        studyType: "",
        studyName: "",
        maxMember: "",
        writer: this.$store.getters.idx,
        title: "",
        content: "",
        date:this.$moment(new Date()).format('YYYYMMDD')
      },
      selected: ""
    };
  },
  methods: {
    async postNotice() {
      if (this.selected === "") {
        alert("Study Type을 선택해주세요");
        return;
      }
      if (this.notice.maxMember <= 0) {
        alert("모집 인원을 설정해주세요");
        return;
      }
      const res = await this.$store.dispatch("appendNotice", this.notice);
      if (res.success === false) alert(res.message);
      else this.$router.push("/notice");
    }
  }, created() {
    this.notice.writer = this.$store.getters.idx;
  },
  watch: {
    selected: function() {
      if (this.selected === "멘토 멘티") {
        this.notice.studyType = this.selected;
      } else if (this.selected === "자율 스터디") {
        this.notice.studyType = this.selected;
      }
    }
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
