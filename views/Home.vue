<template lang="html">
  <div class="">
    <Header></Header>

    <b-container>
      <b-row v-if="user">
        <b-col lg="4" v-for="(card, index) in user.dashboard" :key="index">
          <b-button variant="card" :to="`/card/${api[card].url}`">
            <h5>{{ api[card].name }}</h5>
            <p>{{ api[card].desc }}</p>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../src/components/Header.vue'

export default {
  components: {
    Header
  },
  computed: {
    ...mapGetters({
      user: 'userData',
      api: 'apiData',
    }),
  },
  watch: {
    user () {
      this.generateDashboard()
    }
  },
  mounted () {
    if (this.user) {
      this.generateDashboard()
    }
  },
  methods: {
    generateDashboard () {
      if (this.user.dashboard.length === 0) {
        this.$store.commit('ADD_DASHBOARD', this.generateIds(3, 5))
      }
    },
    generateIds (length, maxValue) {
      let arr = []

      while (arr.length < length) {
        let number = Math.floor(Math.random() * maxValue)

        if (arr.indexOf(number) === -1) {
          arr.push(number)
        }
      }

      return arr
    }
  }
}
</script>

<style lang="css" scoped>
  .btn-card {
    padding: 20px;
    border: 1px solid #e1f1f1;
    border-radius: 3px;
    background-color: white;
    padding: 28px;
    text-align: center;
    margin-bottom: 30px;
    display: block;
  }
</style>
