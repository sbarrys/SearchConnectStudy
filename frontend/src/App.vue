<template>
  <div id="app">
    <Navbar />
    <div class="container-cus">
      <router-view :key="$route.fullPath" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Footer
  }
};

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap&subset=korean');

.text-font1{
  font-family: 'Yeon Sung', cursive;
}
.text-unset {
  color: unset !important;
}
.bg-custom1 {
  background-color: #6f3b48 !important;
}
.bg-custom2 {
  background-color: #522632 !important;
}
.bg-custom3 {
  background-color: #e5ccc8 !important;
}
.bg-custom4 {
  background-color: #ecd7d2 !important;
}
.bg-custom5 {
  background-color: #f3e4df !important;
}
.bg-custom6 {
  background-color: #ffeee7 !important;
}
.text-custom1 {
  color: #6f3b48 !important;
}
.text-custom2 {
  color: #522632 !important;
}
.text-custom3 {
  color: #e5ccc8 !important;
}
.text-custom4 {
  color: #ecd7d2 !important;
}
.text-custom5 {
  color: #f3e4df !important;
}
.text-custom6 {
  color: #ffeee7 !important;
}

.transition-slow {
  transition-duration: 2s;
}

.container-cus {
  width: 100%;
  /* min-height: 100vh; footer 하단 고정 */
  padding-bottom: 250px;
  min-height: 100%;
  height: 100%;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  position: relative;
}
@media (max-width: 768px) {
  .container-cus {
    /* min-height: 100vh; footer 하단 고정 */
    padding-bottom: 315px;
  }
}
</style>