<template>
  <div class="home bg-custom6">
    <h2 v-if="notices" class="text-center text-custom1 text-font1">
      <strong>Search</strong>Study
    </h2>
    <StudyCard />

    <h2 class="text-center my-3 text-custom1 text-font1">
      <strong>Connect</strong>Study
    </h2>
    <div class="mt-4">
      <div>
        <h4>Left and Right (or Start and End)</h4>
        <b-card
          img-src="https://placekitten.com/300/300"
          img-alt="Card image"
          img-left
          class="mb-3"
        >
          <b-card-text>
            <b-table small class="small" :items='assignment' :fields="['title', 'content', 'deadline']" 
            @row-clicked='detail_assign'></b-table>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import moment from "moment";
import HelloWorld from "@/components/HelloWorld.vue";
import StudyCard from "@/components/StudyCard.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    StudyCard
  },
  data: function() {
    return {
      pageNumber: 0,
      size: 5
    };
  },
  computed: {
    notices() {
      var temp = this.$store.state.notices;
      // console.log(temp);
      return temp.slice(0, 6);
    },
    assignment() {
      if (this.$store.state.studyAssignment) {
        var temp = this.$store.state.studyAssignment;
        for (var tmp of temp) {
          tmp.deadline = moment(tmp.deadline).format("YYYY-MM-DD");
        }
        return temp.slice(0, 5);
      }
    },
    notice() {
      if (this.$store.state.studyNotices) {
        var temp = this.$store.state.studyNotices;
        for (var tmp of temp) {
          tmp.date = moment(tmp.date).format("YYYY-MM-DD");
        }
        return temp.slice(0, 5);
      }
    }
  },
  methods: {
    detail(index) {
      this.$router.push({
        name: "Detail",
        params: {
          id: index._id
        }
      });
    },
    detail_assign(){
      this.$router.push({
      })
    }
  },
  async beforeCreate() {
    await this.$store.dispatch("fetchNotices");
    const res = await this.$store.dispatch("fetchAssignments", {
      id: this.$store.state.notices[0]._id
    });
    const res2 = await this.$store.dispatch("fetchStudyNotices", {
      id: this.$store.state.notices[0]._id
    });
  }
};
</script>
