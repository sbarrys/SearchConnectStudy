<template>
  <div class="home bg-custom6">
    <h2 v-if="notices" class="text-center text-custom1 text-font1">
      <strong>Search </strong>Study
    </h2>
    <StudyCard />

    <h2 class="text-center my-3 text-custom1 text-font1">
      <strong>Connect </strong>Study
    </h2>
    <div class="mt-4">
      <h4>Left and Right (or Start and End)</h4>
      <b-card
        img-src="https://placekitten.com/300/300"
        img-alt="Card image"
        img-left
        header="asdasd"
        class="mb-3"
      >
        <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
      </b-card>

      <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
        <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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
    notices() { //이거studies라 생각해야됨
      var temp = this.$store.state.notices;
      // console.log(temp);
      return temp.slice(0, 6);
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
    }
  },
  async beforeCreate() {
    await this.$store.dispatch("fetchNotices");
  }
};
</script>
