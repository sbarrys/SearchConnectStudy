<template>
  <form method="post" @submit.stop.prevent="postNotice">
    <div class="outer">
      <div class="inner">
        <table class="table">
          <tr>
            <th>Study Type</th>
            <td>
              <select v-model="selected">
                <option disabled value>select one</option>
                <option>멘토 멘티</option>
                <option>자율 스터디</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>Member:</th>
            <td>
              <input type="Number" name="studyMember" required v-model="notice.maxMember" />
            </td>
          </tr>
          <tr>
            <th>Study Name :</th>
            <td>
              <input
                type="text"
                name="studyName"
                required
                v-model="notice.studyName"
                placeholder="스터디 이름"
              />
            </td>
          </tr>
          <tr>
            <th>Writer :</th>
            <td>
              <input type="text" name="writer" required v-model="notice.writer" placeholder="글쓴이" />
            </td>
          </tr>
          <tr>
            <th>Title :</th>
            <td>
              <input type="text" name="title" required v-model="notice.title" placeholder="제목" />
            </td>
          </tr>
          <tr>
            <th>Content</th>
            <td>
              <textarea name="content" required v-model="notice.content" placeholder="내용"></textarea>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <button type="submit" class="mybtn btn">작성</button>
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
        writer: "",
        title: "",
        content: ""
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
.mybtn {
  border-radius: 10px;
  background-color: #ecd7d2 !important;
}
</style>