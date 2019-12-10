<template>
  <div class="container-fluid text-center">
    <table hover class="table small table-hover w-100" style="table-layout: fixed">
      <thead>
        <tr>
          <th style="width:12%">Type</th>
          <th style="width:10%">Member</th>
          <th style="width:10%">Writer</th>
          <th style="width:52%">Title</th>
          <th style="width:10%">Date</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="value in notices" :key="value.id" @click="detail(value)">
          <td >{{value.studyType}}</td>
          <td >{{value.maxMember}}</td>
          <td >{{value.writer.name}}</td>
          <td >{{value.title}}</td>
          <td >{{value.date}}</td>
        </tr>
      </tbody>
    </table>
    <p>
      <button class="btn mybtn2" @click="prevPage">Previous</button>
      <button class="btn mybtn2" @click="nextPage">Next</button>
    </p>

    <button type="submit" v-if="$store.getters.idx" class="mybtn btn" @click="write()">Study 생성</button>
  </div>
</template>
<script>
import moment from "moment";

export default {
  data: function() {
    return {
      //       fields: ["studyType", "maxMember", "writer", "title", "create_date"],
      pageNumber: 0,
      size: 5
    };
  },
  computed: {
    notices() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      console.log(this.$store.state.notices);
      var temp = this.$store.state.notices;
      for (var tmp of temp) {
        tmp.date = moment(String(tmp.date)).format("YYYY-MM-DD");
      }
      return temp.slice(start, end);
    }
  },
  methods: {
    write() {
      this.$router.push({
        name: "Create"
      });
    },
    detail(index) {
      this.$router.push({
        name: "Detail",
        params: {
          id: index._id
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
    await this.$store.dispatch("fetchNotices");
  }
};
</script>

<style scoped>
.mybtn {
  border-radius: 10px;
  background-color: #ecd7d2 !important;
}
.mybtn2 {
  border-radius: 10px;
  background: rgba(230, 230, 230, 0.517);
}

table > td {
  word-break: break-all;
}
table {
  text-align: center;
}
td {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
