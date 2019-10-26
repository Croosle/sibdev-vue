<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <b-container>
      <b-link class="navbar-brand" to="/">Dashboard</b-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">

        <b-dropdown size="lg" variant="avatar" toggle-class="text-decoration-none" no-caret>
          <template v-slot:button-content>
            <img src="/sibdev-vue/img/avatar.png" alt="">
          </template>
          <b-dropdown-item v-for="(user, index) in $store.state.users" :key="index" @click="setUser(user.id)">
            {{ user.name }} {{ user.surname }} {{ user.middlename }}
          </b-dropdown-item>
          <b-dropdown-item @click="logout">Выйти</b-dropdown-item>
        </b-dropdown>

        <b-button variant="settings" class="ml-2" to="/settings">
          <img src="/sibdev-vue/svg/settings.svg" alt="" width="28">
        </b-button>

      </div>
    </b-container>
  </nav>
</template>

<script type="text/javascript">
  export default {
    methods: {
      logout () {
        this.$store.dispatch('removeAuthToken')


      },
      setUser (id) {
        this.$store.commit('SET_USER', id)

        this.$router.push('/')
      }
    }
  }
</script>

<style media="screen">
.btn-avatar {
  padding: 0;
}

.btn-avatar img {
  width: 38px;
  border-radius: 20px;
}
</style>
