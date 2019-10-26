<template lang="html">
  <b-container>
    <div class="autorisation">
      <b-form @submit.prevent="onSubmit">
        <b-form-group>
          <b-form-input
            v-model="account.email"
            type="email"
            required
            placeholder="Почта"
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            v-model="account.password"
            type="password"
            required
            placeholder="Пароль"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="autorisation">Вход</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      account: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      const token = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)

      this.$store.dispatch('setAuthToken', {token})

      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
  .autorisation {
    position: fixed;
    max-width: 330px;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #e1f1f1;
    border-radius: 3px;
    background-color: white;
    padding: 28px;
  }

  .btn-autorisation {
    background: #ff4874;
    color: white;
  }

  .btn-autorisation:hover {
    background: #e33e66;
    color: white;
  }
</style>
