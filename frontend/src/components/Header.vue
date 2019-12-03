<template>
  <div id="nav">
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
          <b-nav-item-dropdown text="나의스터디" class="transition-slow" right>
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
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <span v-if="id">{{id}}</span>
              <span v-else>로그인필요</span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            <b-dropdown-item href="#">
              <Login />
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <template>
            <router-link class="text-unset" to="/signup">회원가입</router-link>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
import Login from "@/components/Login.vue";
import dataManger from "../../util/data-manager.js"
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
          // console.log('doc: '+document.cookie)
    console.log("(header.vue)store: "+ this.$store.getters.id)
    if (this.$store.getters.id) {
      this.id = this.$store.getters.id;
    }
  },
};
</script>