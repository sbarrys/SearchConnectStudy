<template>
  <div id="login">
    <button v-b-modal.modal-prevent-closing>Login</button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Login"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="ID"
          label-for="id-input"
          invalid-feedback="ID는 6~12입니다"
        >
          <b-form-input id="id-input" v-model="id" :state="iddState" required></b-form-input>
        </b-form-group>
        <b-form-group
          label="Password"
          label-for="pw-input"
          invalid-feedback="PW는 6~12입니다"
        >
          <b-form-input id="pw-input" v-model="password" :state="pwwState" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  computed: {
    iddState() {
      return this.id.length > 4 && this.id.length < 13 ? true : false;
    },
    pwwState() {
      return this.password.length > 4 && this.password.length < 13 ? true : false;
    }
  },
  data() {
    return {
      id: "",
      password: "",
    };
  },
  methods: {
    checkFormValidity() {
    
      return this.iddState&&this.pwwState;
    },
    resetModal() {
      this.id = "";
      this.password=''
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
      const res = this.$http.post('http://localhost:3000/api/users/login', {id:this.id,password:this.password});

      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>
<style closure>
button {
  border: 0;
  outline: 0;
  padding: 0;
  background-color: white;
}
</style>