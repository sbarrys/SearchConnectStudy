<template>
  <div class="home" >
    <div>
      <div >
        <h4 >스터디</h4>
        <b-card-group deck>
          <b-card header='신규 스터디모집' img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
            <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
          </b-card>

          <b-card header="나의 스터디" img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
            <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
          </b-card>
        </b-card-group>
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
  }
};
</script>
