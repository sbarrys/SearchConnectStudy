<template>
  <div id="nav" class="text-font1">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
    <b-navbar class="py-3 bg-custom4" toggleable="lg" type="light">
      <b-navbar-brand class="text-custom2 h2">
        <router-link class="text-custom2" to="/">Cir.cu.s</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-unset pr-4 py-2" to="/notice">스터디모집</router-link>
          </b-nav-item>
          <b-nav-item-dropdown text="나의스터디" class="transition-slow pr-4 py-2" v-if="id" right>
            <div v-for="st in studylist" :key="st.id">
              <b-dropdown-item href="#">
                <router-link class="text-unset pr-4 py-2" :to="'/study/'+st._id">{{st.title}}</router-link>
              </b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="id" right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <span>{{id}} 님</span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">로그아웃</b-dropdown-item>
          </b-nav-item-dropdown>
          <template>
            <div v-if="!id">
              <Login />
            </div>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
import Login from "@/components/Login.vue";
import dataManager from "../../util/data-manager.js";
export default {
  data() {
    return {
      userok: false,
      id: "",
      studylist: []
    };
  },
  components: {
    Login
  },
  created() {
    console.log("(header.vue)store: " + this.$store.getters.id);
    this.id = this.$store.getters.id;
    // this.studylist = this.$store.getters.studylist;
  },
  methods: {
    logout() {
      dataManager.clearData("id");
      this.$store.commit("logout");
      this.id = this.$store.getters.id;
      if (window.location.pathname == "/") location.reload();
      else this.$router.push("/");
    }
  },
  async beforeCreate() {
    const res = await this.$store.dispatch("getStudylist", {
      idx: this.$store.getters.idx
    });
    console.log(res);
    if (!res.success) {
      alert("로그인 토큰 만료 로그아웃됩니다.");
      this.$store.commit("logout");
      this.id = this.$store.getters.id;
      if (window.location.pathname == "/") location.reload();
      else this.$router.push("/");
    }
    if (!res.data.studyList)
      this.studylist.title = "가입된 스터디가 없습니다.";
    else this.studylist = res.data.studyList;
    console.log(res);
  }
};
</script>

<style scoped>
</style>