<template>
  <div class="container-fluid text-center" >
    <b-table-simple hover class="table small table-hover">
      <b-thead>
        <b-tr>
          <b-th>Type</b-th>
          <b-th>Member</b-th>
          <b-th>Writer</b-th>
          <b-th>Title</b-th>
          <b-th>Date</b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr v-for="value in notices" :key="value.id" @click="detail(value)">
          <b-td>{{value.studyType}}</b-td>
          <b-td>{{value.maxMember}}</b-td>
          <b-td>{{value.writer}}</b-td>
          <b-td>{{value.title}}</b-td>
          <b-td>{{value.create_date}}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <p><button class="btn mybtn2" @click="prevPage">Previous</button>
    <button class="btn mybtn2" @click="nextPage">Next</button></p>

    <button type="submit" class="mybtn btn" @click="write()">Study 생성</button>
  </div>
</template>
<script>
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
      console.log(this.$store.state.notices)
      var temp = this.$store.state.notices;
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

</style>