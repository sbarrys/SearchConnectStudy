<template>
  <div id="nav" class="text-font1">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
    <b-navbar class="py-3 bg-custom4" toggleable="lg" type="light">
      <b-navbar-brand href="/" class="text-custom2 h2">Cir.cu.s</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-unset" to="/notice">스터디모집</router-link>
          </b-nav-item>
          <b-nav-item-dropdown text="나의스터디" class="transition-slow" v-if='id' right>
            <b-dropdown-item href="#">
              <router-link class="text-unset" to="/st1">StudyA</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link class="text-unset" to="/st2">StudyB</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link class="text-unset" to="/st3">Studyexample</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link class="text-unset" to="/st4">Studyexmaple2</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="id" right>
            <!-- Using 'button-content' slot -->
            <template  v-slot:button-content>
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
      id: ""
    };
  },
  components: {
    Login
  },
  created() {
    console.log("(header.vue)store: " + this.$store.getters.id);
    this.id = this.$store.getters.id;
  },
  methods: {
    logout() {
      dataManager.clearData("id");
      this.$store.commit("logout");
      this.id = this.$store.getters.id;
    }
  }
};
</script>

<style scoped>
</style>