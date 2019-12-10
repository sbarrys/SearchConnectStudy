<template>
  <div class="home bg-custom6">
    <h2  class="text-center text-custom1 text-font1">
      <strong>Search</strong>Study
    </h2>
    <StudyCard />

    <h2 class="text-center my-3 text-custom1 text-font1">
      <strong>Connect</strong>Study
    </h2>
    
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
};
</script>
