
<template>
  <div class="outer">
    <div class="inner">
      <Table :items="assignment" :item_field="item_field" val='Assignment'></Table>

      <button class="mybtn2" @click="prevPage">Previous</button>&nbsp;&nbsp;&nbsp;
      <button class="mybtn2" @click="nextPage">Next</button>

      <button type="submit" class="mybtn" @click="write()">과제 생성</button>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import Table from "@/components/Table.vue";

export default {
  components: {
    Table
  },
  data: function() {
    return {
      pageNumber: 0,
      size: 10,
      id: "",
      item_field: ["title", "content", "deadline"]
    };
  },
  computed: {
    assignment() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      if (this.$store.state.studyAssignment[0]) {
        var temp = this.$store.state.studyAssignment;
        for (var tmp of temp) {
          tmp.deadline = moment(tmp.deadline).format("YYYY-MM-DD");
        }
        return temp.slice(start, end);
      } else {
        var temp = [{ writer: "", title: "게시글이없습니다", deadline: "" }];
        return temp;
      }
    }
  },
  methods: {
    write() {
      this.$router.push({
        name: "AssignmentCreate"
      });
    },
    detail(value, index) {
      this.$router.push({
        name: "Detail",
        params: {
          id: this.id,
          temp: value._id,
          nowIndex: index
        }
      });
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  async beforeCreate() {
    const res = await this.$store.dispatch("fetchAssignments", {
      id: this.$route.params.id
    });
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
  height: 100px;
  margin: auto;
  text-align: center;
}
.mybtn {
  border-radius: 10px;
  background-color: #ecd7d2 !important;
  box-shadow: 3px 3px 3px 1px #e5ccb8;
  width: 100px;
  height: 30px;
}
.mybtn2 {
  border-radius: 10px;
  background: rgba(230, 230, 230, 0.517);
  box-shadow: 3px 3px 3px 1px gray;
}
</style>
