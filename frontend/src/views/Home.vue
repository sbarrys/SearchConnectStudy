<template>
  <div class="home">
    <h2 class="text-center my-3">스터디 모집</h2>
    <div>
      <div class="card-columns">
        <div class="card" v-for="value in notices" :key="value.id" @click="detail(value)">
          <div class="card-body">
            <h5 class="card-title">{{value.studyType}}</h5>
            <p class="card-text">
              <br>멤버: {{value.maxMember}}
              <br>작성자: {{value.writer}}
              <br>제목: {{value.title}}
              <br>시간: {{value.create_date}}
            </p>
          </div>
        </div>
      </div>
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
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
      return temp.slice(0, 5);
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
