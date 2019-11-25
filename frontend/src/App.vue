<template>
  <div id="app">
    <Navbar/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from '@/components/Header.vue';
export default {
  name: 'home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
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
</style>