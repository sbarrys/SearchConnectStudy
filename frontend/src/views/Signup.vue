<template>
  <div>
    <h2 class="text-center mt-4">회원가입</h2>

    <div class="row justify-content-center">
      <form class="col-md-8 col-12" @submit.prevent="signup">
        <b-form-group label="ID">
          <b-form-input type="text" v-model="id"></b-form-input>
        </b-form-group>
        <b-form-group label="PASSWORD">
          <b-form-input type="password" v-model="password"></b-form-input>
        </b-form-group>
        <b-form-group label="이름">
          <b-form-input type="text" v-model="name"></b-form-input>
        </b-form-group>
        <b-form-group label="전공">
          <b-form-input type="text" v-model="major"></b-form-input>
        </b-form-group>
        <b-form-group label="성별">
          <b-select v-model="gender" :options="genderopt"></b-select>
        </b-form-group>
        <b-button size="lg bg-custom6 text-dark border-0" type="submit">Signup</b-button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      id: "jeky",
      password: "asdasd",
      name: "이제찬",
      gender: "male",
      major: "사이버보안",
      genderopt: [
        { text: "남", value: "male" },
        { text: "여", value: "female" }
      ]
    };
  },
  methods: {
    signup() {
      const id = this.id;
      const password = this.password;
      const name = this.name;
      const gender = this.gender;
      const major = this.major;

      if (!id || !password || !name || !major || !gender) {
        return false;
      }
      const res = this.$http.post("http://localhost:3000/api/users/signup", {
          id,
          password,
          major,
          name,
          gender
        })
        .then(res => {
          if (res.status === 200) {
            // 성공적으로 회원가입이 되었을 경우
            this.$router.push({ name: "Signin" });
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.btn-lg {
  width: 100%;
}
</style>