<template lang="html">
  <div class="">
    <Header></Header>

    <b-container>
      <b-list-group class="mb-2">
        <b-list-group-item v-for="(user, index) in this.$store.state.users" :key="index" @click="editUser(user.id)" button>
          <span v-if="editingUser.id !== user.id">{{ user.name }} {{ user.surname }} {{ user.middlename }}</span>
          <base-form v-else :user="editingUser"></base-form>
        </b-list-group-item>
      </b-list-group>

      <base-form :user="user"></base-form>

      <b-button @click="addUser" class="mt-2">Добавить</b-button>
      <b-button @click="saveUser" v-if="editingUser.id >= 0" class="mt-2 ml-2">Сохранить</b-button>

    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseForm from '../src/components/BaseForm.vue'
import Header from '../src/components/Header.vue'

export default {
  components: {
    BaseForm,
    Header
  },
  data () {
    return {
      user: {
        id: 0,
        name: '',
        surname: '',
        middlename: '',
        dashboard: []
      },
      editingUser: {}
    }
  },
  computed: {
    ...mapGetters({
      id: 'userID'
    })
  },
  methods: {
    addUser () {
      this.user.id = this.id;

      this.$store.commit('ADD_USER', this.user);

      this.user = {
        id: '',
        name: '',
        surname: '',
        middlename: '',
        dashboard: []
      }
    },
    editUser (id) {
      if (this.editingUser.id != id) {
        this.editingUser = JSON.parse(JSON.stringify(this.$store.state.users[id]))
      }
    },
    saveUser () {
      this.$store.commit('UPDATE_USER', this.editingUser)

      this.editingUser = {}
    }
  }
}
</script>
