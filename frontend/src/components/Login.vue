<template>
  <div id="login">
    <a href="#" class="pr-3 py-1 text-unset" v-b-modal.modal-prevent-closing>Login</a>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Login"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="ID" label-for="id-input" invalid-feedback="ID는 5~12입니다">
          <b-form-input id="id-input" v-model="id" :state="iddState" required></b-form-input>
        </b-form-group>
        <b-form-group label="Password" label-for="pw-input" invalid-feedback="PW는 5~12입니다">
          <b-form-input id="pw-input" type="password" v-model="password" :state="pwwState" required></b-form-input>
        </b-form-group>
      </form>
      <div class="justify-content-end row">
        <span class="small pr-3">설마..아직도..?</span>
        <a class="text-unset small mr-3" href="#" v-on:click="modaloff">회원가입</a>
      </div>
    </b-modal>
  </div>
</template>

<script>
import dataManager from "../../util/data-manager.js";

export default {
  computed: {
    iddState() {
      return this.id.length > 4 && this.id.length < 13 ? true : false;
    },
    pwwState() {
      return this.password.length > 4 && this.password.length < 13
        ? true
        : false;
    }
  },
  data() {
    return {
      id: "",
      password: ""
    };
  },
  methods: {
    checkFormValidity() {
      return this.iddState && this.pwwState;
    },
    resetModal() {
      this.id = "";
      this.password = "";
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      const res = this.$http
        .post("http://localhost:3000/api/auth/login", {
          id: this.id,
          password: this.password
        })
        .then(res => {
          if (res.data.success) {
            dataManager.saveData("id", res.data.data.id);
            dataManager.saveData("token", res.data.data.token);
            dataManager.saveData("idx", res.data.data.idx);
            var arr = [];
            // localStorage.setItem('studylist', res.data.data.studyList)
            for (var st of res.data.data.studyList) {
              arr.push({
                id: st._id,
                title: st.title
              });
            }
            dataManager.saveData("studylist",arr);
            // console.log(JSON.stringify(arr))

            alert(res.data.data.id + "님 환영합니다");
            // console.log(res.data.data.studyList)

            location.reload();
          } else {
            alert(res.data.message);
            this.$refs.modal.hide();
          }
        });

      // Hide the modal manually
    },
    modaloff() {
      this.$refs.modal.hide();
      this.$router.push("/signup").catch(err => {});
    }
  }
};
</script>
<style scoped>
button {
  border: 0;
  outline: 0;
  padding: 0;
  background-color: inherit;
}
</style>